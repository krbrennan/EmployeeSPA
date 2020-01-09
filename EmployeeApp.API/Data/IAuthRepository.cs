
using System.Threading.Tasks;
using EmployeeApp.API.Models;

namespace EmployeeApp.API.Data
{
    public interface IAuthRepository
    {
        //  register user
        Task<User> Register(User user, string password);
        // log user in with API
        Task<User> Login(string user, string password);

        // check is username exists (for uniqueness)
        Task<bool> UserExists(string username);
    }
}