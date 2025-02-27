using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Extensions;

public class Profiles : Profile
{
    public Profiles()
    {

        CreateMap<AppUser, UserDto>().ReverseMap();
        CreateMap<Member, MemberDto>().ReverseMap();

        //----------------------------- Database to Domain -------------------------
        CreateMap<MemberPhoto, MemberPhotoDto>();
        CreateMap<Message, MessageResponseDto>();


        //----------------------------- Domain to Database -------------------------
        CreateMap<CreateMemberDto, Member>();
        CreateMap<CreateMessageDto, Message>();
        //CreateMap<UserDto, AppUser>();
    }
}
