using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class MemberPhoto
{
    [Key]
    public int Id { get; set; }
    public int MemberId { get; set; }
    public string PhotoUrl { get; set; }
    public bool IsMain { get; set; }
    // public string publicId { get; set; }

}
