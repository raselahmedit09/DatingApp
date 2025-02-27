using API.Entities;
using API.Interfaces;

namespace API.Data
{
    public class MessagesRepository : GenericRepository<Message>, IMessagesRepository
    {
        public MessagesRepository(DataContext dataContext) : base(dataContext)
        { }

        // todo 
    }
}
