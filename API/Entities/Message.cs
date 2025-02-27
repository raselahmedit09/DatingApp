using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public partial class Message
    {
        [Key]
        public int Id { get; set; }
        public int SenderUserId { get; set; }
        public int RecipientUserId { get; set; }
        public string Content { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; } = DateTime.UtcNow;
        public bool SenderDeleted { get; set; } = false;
        public bool RecipientDeleted { get; set; } = false;
    }
}