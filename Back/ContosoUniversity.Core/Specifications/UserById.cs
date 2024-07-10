using QuizApp.Entities;

namespace QuizApp.Specifications
{
    public class UserById : Specification<User>
    {
        public UserById(int id)
            : base(s => s.Id == id)
        {
        }
    }
}
