namespace Interview.Entities;

public class User : Entity
{
    
    public required string LastName { get; init; }
    public required string FirstName { get; init; }
    public int Role { get; set; }
    
}


