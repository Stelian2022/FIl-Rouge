namespace QuizApp.Specifications
{
    public class UserByIdWithEnrollments : UserById
    {
        public UserByIdWithEnrollments(int id) : base(id)
        {
            AddInclude( s => s.Enrollments);
        }
    }
}
