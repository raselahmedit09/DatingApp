using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class MemberRepository : GenericRepository<Member>, IMemberRepository
{
    public MemberRepository(DataContext dataContext) : base(dataContext)
    {
    }

    public async Task<IEnumerable<Member>> GetMembersWithPhoto()
    {
        string sql = "SELECT M.Id,M.UserId,M.FirstName,M.LastName,M.DateOfBirth,M.KnownAs,M.Gender,M.Introduction,M.LookingFor,M.Interests,M.City,M.Country,M.Created,MP.Id AS MemberPhotoId,MP.PhotoUrl FROM Members AS M LEFT JOIN MemberPhotos AS MP ON M.Id = MP.MemberId AND MP.IsMain = 1";
        return dbSet.FromSqlRaw(sql).ToList();
        //  dbSet.FromSqlRaw("EXEC sp_name @param1" , param1);
    }
}
