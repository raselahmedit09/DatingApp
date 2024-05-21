using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]
public class MemberPhotoController : BaseApiController
{
    private readonly ILogger<MemberPhotoController> _logger;
    private readonly IMapper _mapper;
    private readonly IUnitOfWork _unitOfWork;

    public MemberPhotoController(
       ILogger<MemberPhotoController> logger,
       IMapper mapper,
       ITokenService tokenService,
       IUnitOfWork unitOfWork)
    {
        _logger = logger;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }


    [AllowAnonymous]
    [HttpGet("GetPhotosByMemberId")]
    public async Task<ActionResult<IList<MemberPhotoDto>>> GetPhotosByMemberId(int id)
    {
        var memberPhotos = await _unitOfWork._memberPhotoRepository.GetPhotosByMemberId(id);
        IList<MemberPhotoDto> memberPhotoList = (IList<MemberPhotoDto>)_mapper.Map<MemberPhotoDto>(memberPhotos);

        return Ok(_mapper.Map<MemberPhotoDto>(memberPhotoList));
    }
}

