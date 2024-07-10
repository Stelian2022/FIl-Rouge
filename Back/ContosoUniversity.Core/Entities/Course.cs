namespace QuizApp.Entities;

public class Course : Entity
{
    public required string Title { get; init; }
    public int Credits { get; init; }

    readonly List<Enrollment> _enrollments 
        = new List<Enrollment>();
    public IReadOnlyCollection<Enrollment> Enrollments 
        => _enrollments.AsReadOnly();
}


