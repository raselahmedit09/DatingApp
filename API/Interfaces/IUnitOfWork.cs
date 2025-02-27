namespace API.Interfaces;

public interface IUnitOfWork
{
    IUserRepository _userRepository { get; }
    IMemberRepository _memberRepository { get; }
    IMemberPhotoRepository _memberPhotoRepository { get; }
    IMessagesRepository _messagesRepository { get; }

    Task<bool> CompleteAsync();
    bool HasChanges();
}
