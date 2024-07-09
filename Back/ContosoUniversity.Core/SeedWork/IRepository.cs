namespace SeedWork;

public interface IRepository<T> where T : IAggregateRoot
{
	Task<T?> GetById(int id);
	Task<T?> GetSingle(ISpecification<T> specification);

	Task<IEnumerable<T>> ListAll();
	Task<IEnumerable<T>> List(ISpecification<T> specification);

	Task<T> Insert(T entity);
	Task Update(T entity);
	Task Delete(T entity);
}
