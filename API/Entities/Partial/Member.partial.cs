
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;
public partial class Member
{
    [NotMapped]
    public string PhotoUrl { get; set; }

    [NotMapped]
    public int Age { get; set; }


}