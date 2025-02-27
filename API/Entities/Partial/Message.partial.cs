using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities.Partial
{

    public partial class Message
    {
        [NotMapped] public string SenderPhotoUrl { get; set; }
        [NotMapped] public string SenderFirstName { get; set; }
        [NotMapped] public string SenderLastName { get; set; }
    }
}
