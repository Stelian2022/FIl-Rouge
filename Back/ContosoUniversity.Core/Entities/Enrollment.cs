namespace Interview.Entities;

public class Enrollment : Entity
{
    public Level? Grade { get; init; }

    public Question Course { get; init; } = null!; 
    public User Student { get; init; } = null!;
}


