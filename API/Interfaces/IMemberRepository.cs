using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IMemberRepository : IGenericRepository<Member>
{
    public Task<Member> GetMemberById(int id);

    public Task<IEnumerable<Member>> GetMembers();

}
