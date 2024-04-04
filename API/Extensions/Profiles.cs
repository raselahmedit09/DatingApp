using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Extensions;

public class Profiles : Profile
{
    public Profiles()
    {
        //----------------------------- Database to Domain -------------------------
        CreateMap<AppUser, UserDto>();
        CreateMap<Member, MemberDto>();
        CreateMap<MemberPhoto, MemberPhotoDto>();

        //----------------------------- Domain to Database -------------------------
        CreateMap<UserDto, AppUser>();
    }
}
