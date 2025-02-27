using System;

namespace API.DTOs
{
    public class MessageResponseDto
    {
        public int Id { get; set; }
        public int SenderUserId { get; set; }
        public string SenderPhotoUrl { get; set; }
        public string SenderFirstName { get; set; }
        public string SenderLastName { get; set; }
        public int RecipientUserId { get; set; }
        public string Content { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }
        public bool SenderDeleted { get; set; }
        public bool RecipientDeleted { get; set; }
    }
}
