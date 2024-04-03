using API.Entities;
using API.Interfaces;

namespace API.Data;

public class MemberPhotoRepository : GenericRepository<MemberPhoto>, IMemberPhotoRepository
{
    public MemberPhotoRepository(DataContext dataContext) : base(dataContext)
    {
    }
}
