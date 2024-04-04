using API.Entities;

namespace API.Interfaces;

public interface IMemberPhotoRepository : IGenericRepository<MemberPhoto>
{
    public Task<IEnumerable<MemberPhoto>> GetPhotosByMemberId(int id);

}
