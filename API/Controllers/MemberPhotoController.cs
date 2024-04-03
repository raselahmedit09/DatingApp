using API.Interfaces;
using AutoMapper;

namespace API.Controllers;

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



}
