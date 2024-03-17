using System.Collections.Generic;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly ILogger<UsersController> _logger;
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;

    public UsersController(
        IMapper mapper,
        ILogger<UsersController> logger,
        IUnitOfWork unitOfWork
       )
    {
        _mapper = mapper;
        _logger = logger;
        _unitOfWork = unitOfWork;
    }

    [AllowAnonymous]
    [HttpGet("GetAllUser")]
    public async Task<ActionResult<IList<UserDto>>> GetUsers()
    {
        var users = await _unitOfWork._userRepository.GetAll();
        IList<UserDto> userList = _mapper.Map<IEnumerable<UserDto>>(users).ToList();
        return Ok(userList);
    }

    [HttpGet("GetUserById")]
    public async Task<ActionResult<UserDto>> GetUserById(int id)
    {
        var user = await _unitOfWork._userRepository.GetById(id);
        UserDto userDto = _mapper.Map<UserDto>(user);
        return Ok(userDto);
    }

}
