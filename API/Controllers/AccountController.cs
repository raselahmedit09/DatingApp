﻿using System.Security.Cryptography;
using System.Text;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly ILogger<AccountController> _logger;
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;
    private ITokenService _tokenService;

    public AccountController(
        ILogger<AccountController> logger,
        IMapper mapper,
        ITokenService tokenService,
        IUnitOfWork unitOfWork)
    {
        _logger = logger;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
        _tokenService = tokenService;
    }


    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        try
        {
            if (await IsUserExists(registerDto.UserName)) return BadRequest("This User is already exists!");

            using var hmac = new HMACSHA512();

            var user = new AppUser
            {
                UserName = registerDto.UserName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key,
            };

            await _unitOfWork._userRepository.Add(user);
            await _unitOfWork.CompleteAsync();

            var registerdUser = await _unitOfWork._userRepository.GetUserByUserName(registerDto.UserName);

            await AddAsDefaultMember(registerDto, registerdUser.Id);

            return new UserDto
            {
                Id = registerdUser.Id,
                UserName = registerdUser.UserName,
                Token = _tokenService.CreateToken(registerdUser)
            };
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private async Task<bool> IsUserExists(string userName)
    {
        return await _unitOfWork._userRepository.IsUserExists(userName);
    }

    private async Task AddAsDefaultMember(RegisterDto registerdUser, int userId)
    {
        CreateMemberDto createMemberDto = new CreateMemberDto
        {
            UserId = userId,
            FirstName = registerdUser.FirstName,
            LastName = registerdUser.LastName,
            DateOfBirth = registerdUser.DateOfBirth,
            KnownAs = registerdUser.FirstName,
            Gender = registerdUser.Gender,
            Created = DateTime.Now,
        };

        await _unitOfWork._memberRepository.Add(_mapper.Map<Member>(createMemberDto));
        await _unitOfWork.CompleteAsync();
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {

        var user = await _unitOfWork._userRepository.GetUserByUserName(loginDto.UserName);

        if (user == null) return Unauthorized("Invalid username");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
        }

        return new UserDto
        {
            Id = user.Id,
            UserName = user.UserName,
            Token = _tokenService.CreateToken(user)
        };
    }
}
