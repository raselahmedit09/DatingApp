using System;

namespace API.DTOs
{
    public class CreateMemberDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public string Gender { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
    }
}
