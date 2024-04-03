using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IMemberRepository : IGenericRepository<Member>
{
    public Task<IEnumerable<Member>> GetMembersWithPhoto();
}
