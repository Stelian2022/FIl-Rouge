namespace QuizApp.Entities;

public class Enrollment : Entity
{
    public Grade? Grade { get; init; }

    public Course Course { get; init; } = null!; 
    public User User { get; init; } = null!;
}


