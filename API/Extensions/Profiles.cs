using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Extensions;

public class Profiles : Profile
{
    public Profiles()
    {
        //----------------------------- Database to Domain -------------------------
        CreateMap<AppUser, UserDto>().ReverseMap();
        CreateMap<Member, MemberDto>().ReverseMap(); ;
        CreateMap<MemberPhoto, MemberPhotoDto>();


        //----------------------------- Domain to Database -------------------------
        CreateMap<CreateMemberDto, Member>();
        //CreateMap<UserDto, AppUser>();
    }
}
