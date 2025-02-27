using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class UserRepository : GenericRepository<AppUser>, IUserRepository
{
    public UserRepository(DataContext dataContext) : base(dataContext)
    {
    }

    public async Task<AppUser> GetUserByUserName(string userName)
    {
        return await dbSet.SingleOrDefaultAsync(x => x.UserName == userName);
    }

    public async Task<bool> IsUserExists(string userName)
    {
        return await dbSet.AnyAsync(x => x.UserName == userName.ToLower());
    }
}
