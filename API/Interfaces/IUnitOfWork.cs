namespace API.Interfaces;

public interface IUnitOfWork
{
    IUserRepository _userRepository { get; }
    IMemberRepository _memberRepository { get; }

    Task<bool> CompleteAsync();
    bool HasChanges();
}
