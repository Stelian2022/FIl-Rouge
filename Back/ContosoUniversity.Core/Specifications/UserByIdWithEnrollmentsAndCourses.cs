namespace QuizApp.Specifications
{
    public class UserByIdWithEnrollmentsAndCourses : UserById
    {
        public UserByIdWithEnrollmentsAndCourses(int id) : base(id)
        {
            AddInclude("Enrollments.Course");
        }
    }
}
