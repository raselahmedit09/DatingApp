using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces;

public interface IMemberRepository
{
    public Task<IEnumerable<Member>> GetMembersWithPhoto();
}
