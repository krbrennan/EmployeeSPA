using System.ComponentModel.DataAnnotations;

namespace EmployeeApp.API.Dtos
{
    public class UserForRegisterDto
    {
        // this is where you can perform validations

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must provide a password between 4 and 8 characters" )]
        public string Password { get; set; }
    }
}