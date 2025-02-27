

using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class CreateMessageDto
{
    [Required]
    public int RecipientUserId { get; set; }
    [Required]
    public string Content { get; set; }
    public int? SenderUserId { get; set; }
    public DateTime? MessageSent { get; set; } = DateTime.UtcNow;

}
