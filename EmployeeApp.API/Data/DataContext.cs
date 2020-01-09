using System;
using EmployeeApp.API.Models;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace EmployeeApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}


        public DbSet<Values> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
