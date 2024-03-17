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

        //----------------------------- Domain to Database -------------------------
        CreateMap<UserDto, AppUser>();

    }
}
