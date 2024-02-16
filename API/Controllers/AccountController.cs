﻿using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private DataContext _dataContext;
    private ITokenService _tokenService;

    public AccountController(DataContext dataContext, ITokenService tokenService)
    {
        _dataContext = dataContext;
        _tokenService = tokenService;
    }


    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {

        if (await IsUserExists(registerDto.UserName)) return BadRequest("This User is already exists!");

        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            UserName = registerDto.UserName,
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            PasswordSalt = hmac.Key,
        };

        _dataContext.Users.Add(user);
        await _dataContext.SaveChangesAsync();

        return new UserDto
        {
            UserName = user.UserName,
            Token = _tokenService.CreateToken(user)
        };
    }

    [HttpPost("login")]
    public async Task<ActionResult<object>> Login(LoginDto loginDto)
    {
        var thing = _dataContext.Users.Find(-1);

        Console.WriteLine(thing.ToString());

        var user = await _dataContext.Users
            .SingleOrDefaultAsync(x => x.UserName == loginDto.UserName);

        if (user == null) return Unauthorized("Invalid username");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

        for (int i = 0; i < computedHash.Length; i++)
        {
            if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
        }

        return new UserDto
        {
            UserName = user.UserName,
            Token = _tokenService.CreateToken(user)
        };
    }


    private async Task<bool> IsUserExists(string userName)
    {
        Console.WriteLine(userName);
        return await _dataContext.Users.AnyAsync(x => x.UserName == userName.ToLower());
    }
}
