
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;
public partial class Member
{
    [NotMapped]
    public string PhotoUrl { get; set; }
}