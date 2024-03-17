namespace API.Interfaces;

public interface IUnitOfWork
{
    IUserRepository _userRepository { get; }

    Task<bool> CompleteAsync();
    bool HasChanges();
}
