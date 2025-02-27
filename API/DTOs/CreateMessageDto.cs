

using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class CreateMessageDto
{
    [Required]
    public string RecipientUsername { get; set; }
    [Required]
    public string Content { get; set; }
}
