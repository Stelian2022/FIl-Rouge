namespace Interview.Entities;

public class Agent : Entity
{

    public required string LastName { get; init; }
    public required string FirstName { get; init; }
    public int IdAdmin { get; set; }

}


