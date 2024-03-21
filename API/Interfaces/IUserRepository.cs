using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IUserRepository : IGenericRepository<AppUser>
{
    Task<AppUser> GetUserByUserName(string userName);
    public Task<bool> IsUserExists(string userName);
}
