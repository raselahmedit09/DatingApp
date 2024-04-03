namespace API.DTOs;

public class MemberPhotoDto
{
    public int Id { get; set; }
    public int MemberId { get; set; }
    public string PhotoUrl { get; set; }
    public bool IsMain { get; set; }
}
