using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
    private readonly DataContext _dataContext;
    public UsersController(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    [AllowAnonymous]
    [HttpGet("GetAllUser")]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return await _dataContext.Users.ToListAsync();
    }

    [HttpGet("GetUserById")]
    public async Task<ActionResult<AppUser>> GetUserById(int id)
    {
        return await _dataContext.Users.FindAsync(id);
    }

}
