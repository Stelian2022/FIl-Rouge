namespace QuizApp.Entities;

public class User : Entity, IAggregateRoot
{
    public required string LastName { get; init; }
    public required string FirstName { get; init; }
    public required string Email { get; init; }
    public DateTime EnrollmentDate { get; init; }
    public string? PhotoUri { get; init; }

    readonly List<Enrollment> _enrollments 
        = new List<Enrollment>();
    public IReadOnlyCollection<Enrollment> Enrollments 
        => _enrollments.AsReadOnly();

    public bool AddEnrollment(Course course, Grade grade)
    {
        if (_enrollments.Exists(e => e.Course.Id == course.Id))
        {
            return false;
        }

        var enrollment = new Enrollment()
        {
            User = this,
            Course = course,
            Grade = grade
        };

        _enrollments.Add(enrollment);
        return true;
    }

}


