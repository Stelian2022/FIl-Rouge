using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace QuizApp.EF;

public class SchoolContextFactory : IDesignTimeDbContextFactory<SchoolContext>
{
    public SchoolContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<SchoolContext>();
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=QuizApp;Trusted_Connection=True;MultipleActiveResultSets=true");

        return new SchoolContext(optionsBuilder.Options);
    }
}
