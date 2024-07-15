using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Interview.EF;

public class InterviewContextFactory : IDesignTimeDbContextFactory<InterviewContext>
{
    public InterviewContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<InterviewContext>();
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Interview;Trusted_Connection=True;MultipleActiveResultSets=true");

        return new InterviewContext(optionsBuilder.Options);
    }
}
