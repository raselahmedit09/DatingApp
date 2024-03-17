using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IUserRepository : IGenericRepository<AppUser>
{
    Task<AppUser> GetUserByUserName(string userName);

    public Task<bool> IsUserExists(string userName);
    // public void Register(AppUser appUser);
    // public AppUser GetUserByUserName(string userName);
    // public Task<ActionResult<IEnumerable<AppUser>>> GetUsers();
    // public Task<ActionResult<AppUser>> GetUserById(int id);
}
