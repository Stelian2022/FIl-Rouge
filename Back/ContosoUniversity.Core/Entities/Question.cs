namespace Interview.Entities;

public class Question : Entity
{
    public required string Name { get; init; }
    public int IdLevel { get; init; }
    public int IdTechno { get; set; }
    public int IdAdmin { get; set; }    

    //readonly List<Enrollment> _enrollments = new List<Enrollment>();
    //public IReadOnlyCollection<Enrollment> Enrollments => _enrollments.AsReadOnly();
}


