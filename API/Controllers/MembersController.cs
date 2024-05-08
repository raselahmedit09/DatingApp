using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]
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
    [HttpGet("GetMembers")]
    public async Task<ActionResult<IList<MemberDto>>> GetMembers()
    {
        var members = await _unitOfWork._memberRepository.GetMembers();
        IList<MemberDto> memberList = _mapper.Map<IEnumerable<MemberDto>>(members).ToList();
        return Ok(memberList);
    }

    [AllowAnonymous]
    [HttpGet("GetMemberWithPhotosById")]
    public async Task<ActionResult<IList<MemberDto>>> GetMemberWithPhotosById(int id)
    {
        var member = await _unitOfWork._memberRepository.GetMemberById(id);
        MemberDto memberDetail = _mapper.Map<MemberDto>(member);

        var memberPhotos = await _unitOfWork._memberPhotoRepository.GetPhotosByMemberId(memberDetail.Id);
        IList<MemberPhotoDto> memberPhotoList = _mapper.Map<IEnumerable<MemberPhotoDto>>(memberPhotos).ToList();
        memberDetail.MemberPhotos = memberPhotoList;

        return Ok(_mapper.Map<MemberDto>(memberDetail));
    }

    [AllowAnonymous]
    [HttpPut("UpdateMember")]
    public async Task<ActionResult> UpdateMember(MemberDto memberDto)
    {
        if (memberDto.Id > 0)
        {
            await _unitOfWork._memberRepository.Update(_mapper.Map<Member>(memberDto));
        }
        else
        {
            await _unitOfWork._memberRepository.Add(_mapper.Map<Member>(memberDto));
        }

        if (await _unitOfWork.CompleteAsync()) return NoContent();

        return BadRequest("Failed to update user");

    }

}
