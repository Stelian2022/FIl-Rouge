using QuizApp.Entities;

namespace QuizApp.Specifications
{
    public class UsersByName : Specification<User>
    {
        public UsersByName(string name)
            :base(s => s.LastName == name)
        {

        }
    }
}
