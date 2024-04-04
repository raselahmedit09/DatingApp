using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class MemberPhotoRepository : GenericRepository<MemberPhoto>, IMemberPhotoRepository
{
    public MemberPhotoRepository(DataContext dataContext) : base(dataContext)
    {
    }

    public async Task<IEnumerable<MemberPhoto>> GetPhotosByMemberId(int id)
    {
        string sql = "SELECT *  FROM MemberPhotos WHERE MemberId= " + id + "";
        return dbSet.FromSqlRaw(sql).ToList();
        //  dbSet.FromSqlRaw("EXEC sp_name @param1" , param1);
    }

}
