using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class MembersController : BaseApiController
{
    private readonly ILogger<MembersController> _logger;
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;

    public MembersController(
        IMapper mapper,
        ILogger<MembersController> logger,
        IUnitOfWork unitOfWork
       )
    {
        _mapper = mapper;
        _logger = logger;
        _unitOfWork = unitOfWork;
    }

    [AllowAnonymous]
    [HttpGet("GetMembersWithPhoto")]
    public async Task<ActionResult<IList<MemberDto>>> GetMembersWithPhoto()
    {
        var users = await _unitOfWork._memberRepository.GetMembersWithPhoto();
        IList<MemberDto> memberList = _mapper.Map<IEnumerable<MemberDto>>(users).ToList();
        return Ok(memberList);
    }

}
