namespace API.DTOs;

public class MemberDto
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string KnownAs { get; set; }
    public string Gender { get; set; }
    public string Introduction { get; set; }
    public string LookingFor { get; set; }
    public string Interests { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public DateTime Created { get; set; }

    public string PhotoUrl { get; set; }
    public int Age { get; set; }

    public IList<MemberPhotoDto> MemberPhotos { get; set; }
}
