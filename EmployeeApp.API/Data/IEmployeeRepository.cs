using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeeApp.API.Dtos;
using EmployeeApp.API.Models;

namespace EmployeeApp.API.Data
{
    public interface IEmployeeRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         void UpdateUser<T>(T userEntity) where T: class;
    }
}