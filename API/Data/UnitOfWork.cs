using API.Data;
using API.Interfaces;
using AutoMapper;

namespace API.Data;

public class UnitOfWork : IUnitOfWork, IDisposable
{
    private readonly DataContext _dbContext;

    public UnitOfWork(DataContext dbContext)
    {
        _dbContext = dbContext;
    }

    public IUserRepository _userRepository => new UserRepository(_dbContext);

    public async Task<bool> CompleteAsync()
    {
        return await _dbContext.SaveChangesAsync() > 0;
    }

    public bool HasChanges()
    {
        return _dbContext.ChangeTracker.HasChanges();
    }

    public void Dispose()
    {
        _dbContext.Dispose();
    }
}
