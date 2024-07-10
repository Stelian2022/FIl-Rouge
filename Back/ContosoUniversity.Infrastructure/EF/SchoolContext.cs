using Microsoft.EntityFrameworkCore;

namespace QuizApp.EF;

public class SchoolContext : DbContext
{
    public DbSet<User> Users => Set<User>();
    public DbSet<Course> Courses => Set<Course>();
    public DbSet<Enrollment> Enrollments => Set<Enrollment>();
    
    public SchoolContext(
        DbContextOptions<SchoolContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(
    ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .Property(b => b.LastName)
            .IsRequired()
            .HasMaxLength(32);

        modelBuilder.Entity<User>()
            .Property(b => b.FirstName)
            .IsRequired()
            .HasMaxLength(32);

        modelBuilder.Entity<Course>()
            .Property(b => b.Title)
            .IsRequired()
            .HasMaxLength(40);

        modelBuilder.Entity<User>().HasData(
           new User
           {
               Id = 1,
               FirstName = "Carson",
               LastName = "Alexander",
               Email = "stanciu.stelian86@yahoo.fr",
               EnrollmentDate = DateTime.Parse("2010-09-01"),
               PhotoUri = "/Images/awkwardguy.jpg"
           },
            new User
            {
                Id = 2,
                FirstName = "Meredith",
                LastName = "Alonso",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2012-09-01"),
                PhotoUri = "/Images/fashionnightmare.jpg"
            },
            new User
            {
                Id = 3,
                FirstName = "Arturo",
                LastName = "Anand",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2013-09-01"),
                PhotoUri = "/Images/mustachioed.jpg"
            },
            new User
            {
                Id = 4,
                FirstName = "Gytis",
                LastName = "Barzdukas",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2012-09-01")
            },
            new User
            {
                Id = 5,
                FirstName = "Yan",
                LastName = "Li",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2012-09-01")
            },
            new User
            {
                Id = 6,
                FirstName = "Peggy",
                LastName = "Justice",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2011-09-01"),
                PhotoUri = "/Images/disheveled.jpg"
            },
            new User
            {
                Id = 7,
                FirstName = "Laura",
                LastName = "Norman",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2013-09-01"),
                PhotoUri = "/Images/raspberryberet.jpg"
            },
            new User
            {
                Id = 8,
                FirstName = "Nino",
                LastName = "Olivetto",
                Email = "stanciu.stelian86@yahoo.fr",
                EnrollmentDate = DateTime.Parse("2005-09-01"),
                PhotoUri = "/Images/smileydude.jpg"
            });

        modelBuilder.Entity<Course>().HasData(
            new Course { Id = 1, Title = "Chemistry", Credits = 3 },
            new Course { Id = 2, Title = "Microeconomics", Credits = 3 },
            new Course { Id = 3, Title = "Macroeconomics", Credits = 3 },
            new Course { Id = 4, Title = "Calculus", Credits = 4 },
            new Course { Id = 5, Title = "Trigonometry", Credits = 4 },
            new Course { Id = 6, Title = "Composition", Credits = 3 },
            new Course { Id = 7, Title = "Literature", Credits = 4 }
            );

        modelBuilder.Entity<Enrollment>().HasData(
            new
            {
                Id = 1,
                UserId = 1,
                CourseId = 1,
                Grade = Grade.A
            },
            new
            {
                Id = 2,
                UserId = 1,
                CourseId = 2,
                Grade = Grade.C
            },
            new
            {
                Id = 3,
                UserId = 1,
                CourseId = 3,
                Grade = Grade.B
            },
            new
            {
                Id = 4,
                UserId = 2,
                CourseId = 4,
                Grade = Grade.B
            },
            new
            {
                Id = 5,
                UserId = 2,
                CourseId = 5,
                Grade = Grade.B
            },
            new
            {
                Id = 6,
                UserId = 2,
                CourseId = 6,
                Grade = Grade.B
            },
            new
            {
                Id = 7,
                UserId = 3,
                CourseId = 1
            },
            new
            {
                Id = 8,
                UserId = 3,
                CourseId = 2,
                Grade = Grade.B
            },
            new
            {
                Id = 9,
                UserId = 4,
                CourseId = 1,
                Grade = Grade.B
            },
            new
            {
                Id = 10,
                UserId = 5,
                CourseId = 6,
                Grade = Grade.B
            },
            new
            {
                Id = 11,
                UserId = 6,
                CourseId = 7,
                Grade = Grade.B
            }
        );
    }
}

