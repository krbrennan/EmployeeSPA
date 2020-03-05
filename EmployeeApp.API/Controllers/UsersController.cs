using System;
using System.Threading.Tasks;
using EmployeeApp.API.Data;
using EmployeeApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly IEmployeeRepository _repo;

        public UsersController(IEmployeeRepository repo)
        {
            _repo = repo;
        }
        
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            return Ok(user);
        }
    [AllowAnonymous]
    [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody]UserForUpdateDto user)
        {
            try
            {
                if(user == null)
                {
                    Unauthorized();
                }

                var userEntity = await _repo.GetUser(id);
                if(userEntity == null)
                {
                    NotFound();
                }
                var changes = user;

                userEntity.City = user.City;
                userEntity.Country = user.Country;
                userEntity.Gender = user.Gender;
                userEntity.Introduction = user.Introduction;
                userEntity.Interests = user.Interests;
                userEntity.KnownAs = user.KnownAs;

                _repo.UpdateUser(userEntity);
                await _repo.SaveAll();

                // await _repo.UpdateUser(userEntity);

                // return NoContent();
                return Ok(userEntity);
            }
                catch
                {
                    return StatusCode(500, "Sorry, Something went wrong!!");
                }
        }
    }
}