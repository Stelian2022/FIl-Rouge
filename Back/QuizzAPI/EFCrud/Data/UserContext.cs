using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using UserApi.Models;

namespace UserApi.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}