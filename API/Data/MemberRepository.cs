using API.Entities;
using API.Extensions;
using API.Interfaces;

namespace API.Data;

public class MemberRepository : GenericRepository<Member>, IMemberRepository
{
    public MemberRepository(DataContext dataContext) : base(dataContext)
    {
    }

    public async Task<Member> GetMemberById(int id)
    {
        return await _dataContext.GetSingleAsync<Member>("SELECT M.*, " +
        " FLOOR(DATEDIFF(DAY, M.DateOfBirth, GETDATE()) / 365.25) AS Age,MP.PhotoUrl" +
        " FROM Members AS M LEFT JOIN MemberPhotos AS MP ON M.Id = MP.MemberId AND MP.IsMain = 1 WHERE M.Id = " + id + " ");
    }

    public async Task<IEnumerable<Member>> GetMembers()
    {
        return await _dataContext.GetListAsync<Member>("SELECT M.Id,M.KnownAs,M.City,MP.PhotoUrl FROM Members AS M LEFT JOIN MemberPhotos AS MP ON M.Id = MP.MemberId AND MP.IsMain = 1");


        //string sql = "SELECT M.Id,M.UserId,M.FirstName,M.LastName,M.DateOfBirth,M.KnownAs,M.Gender,M.Introduction,M.LookingFor,M.Interests,M.City,M.Country,M.Created,MP.PhotoUrl FROM Members AS M LEFT JOIN MemberPhotos AS MP ON M.Id = MP.MemberId AND MP.IsMain = 1";
        //return dbSet.FromSqlRaw(sql).ToList();
        //  dbSet.FromSqlRaw("EXEC sp_name @param1" , param1);
    }
}
