namespace Interview.Entities;

public class Quiz : Entity
{
    public string Name { get; set; }    
    public int IdAgent { get; init; }
    public int IdCandidat { get; set; }
   // public int Id { get; set; }

}


