using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace VelvetWeb.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [DisplayName("Display Order")]
        [Range(1,100,ErrorMessage ="Dispaly Orderd must be between 1 and 100!")]
        public int DisplayOrder { get; set; }

    }
}
