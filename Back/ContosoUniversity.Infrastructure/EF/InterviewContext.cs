using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace Interview.EF
{
    public class InterviewContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Question> Questions { get; set; }
        //public DbSet<Enrollment> Enrollments { get; set; }

        public InterviewContext(DbContextOptions<InterviewContext> options) : base(options)
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

            modelBuilder.Entity<Question>()
                .Property(b => b.Name)
                .IsRequired()
                .HasMaxLength(40);

            modelBuilder.Entity<User>().HasData(
               new User
               {
                   Id = 1,
                   FirstName = "Carson",
                   LastName = "Alexander",
                   Role = 2,
                   
               },
                new User
                {
                    Id = 2,
                    FirstName = "Meredith",
                    LastName = "Alonso",
                    Role = 2,
                    
                },
                new User
                {
                    Id = 3,
                    FirstName = "Arturo",
                    LastName = "Anand",
                    Role = 1,
                    
                },
                new User
                {
                    Id = 4,
                    FirstName = "Gytis",
                    LastName = "Barzdukas",
                    Role = 3
                },
                new User
                {
                    Id = 5,
                    FirstName = "Yan",
                    LastName = "Li",
                    Role = 2
                },
                new User
                {
                    Id = 6,
                    FirstName = "Peggy",
                    LastName = "Justice",
                    Role = 3
                },
                new User
                {
                    Id = 7,
                    FirstName = "Laura",
                    LastName = "Norman",
                    Role = 2
                },
                new User
                {
                    Id = 8,
                    FirstName = "Nino",
                    LastName = "Olivetto",
                    Role = 3
                });

            modelBuilder.Entity<Question>().HasData(
                new Question { Id = 1, Name = "Chemistry", IdLevel = 'A' },
                new Question { Id = 2, Name = "Microeconomics", IdLevel = 'A' },
                new Question { Id = 3, Name = "Macroeconomics", IdLevel = 'B' },
                new Question { Id = 4, Name = "Calculus", IdLevel = 'A' },
                new Question { Id = 5, Name = "Trigonometry", IdLevel = 'C' },
                new Question { Id = 6, Name = "Composition", IdLevel = 'A' },
                new Question { Id = 7, Name = "Literature", IdLevel = 'C' }
                );

            /*
            modelBuilder.Entity<Enrollment>().HasData(
                new
                {
                    Id = 1,
                    StudentId = 1,
                    CourseId = 1,
                    Level = A
                },
                new
                {
                    Id = 2,
                    StudentId = 1,
                    CourseId = 2,
                    Level = Level.C
                },
                new
                {
                    Id = 3,
                    StudentId = 1,
                    CourseId = 3,
                    Level = Level.B
                },
                new
                {
                    Id = 4,
                    StudentId = 2,
                    CourseId = 4,
                    Grade = Level.B
                },
                new
                {
                    Id = 5,
                    StudentId = 2,
                    CourseId = 5,
                    Grade = Level.B
                },
                new
                {
                    Id = 6,
                    StudentId = 2,
                    CourseId = 6,
                    Grade = Level.B
                },
                new
                {
                    Id = 7,
                    StudentId = 3,
                    CourseId = 1
                },
                new
                {
                    Id = 8,
                    StudentId = 3,
                    CourseId = 2,
                    Grade = Level.B
                },
                new
                {
                    Id = 9,
                    StudentId = 4,
                    CourseId = 1,
                    Grade = Level.B
                },
                new
                {
                    Id = 10,
                    StudentId = 5,
                    CourseId = 6,
                    Grade = Level.B
                },
                new
                {
                    Id = 11,
                    StudentId = 6,
                    CourseId = 7,
                    Grade = Level.B
                }
            );
            */
        }
    }
}
