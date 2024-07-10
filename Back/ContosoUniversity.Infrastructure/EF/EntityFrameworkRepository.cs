using Microsoft.EntityFrameworkCore;

namespace QuizApp.EF;

public class EntityFrameworkRepository<T> : IRepository<T>
    where T : class, IAggregateRoot
{
    protected SchoolContext Context { get; }

    public EntityFrameworkRepository(SchoolContext context)
    {
        Context = context;
    }

    public async Task<T?> GetById(int id)
    {
        return await Context.Set<T>().FindAsync(id);
    }

    public async Task<T?> GetSingle(
        ISpecification<T> specification)
    {
        return await ApplySpecification(specification)
            .SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<T>> ListAll()
    {
        return await Context.Set<T>().ToListAsync();
    }

    public async Task<IEnumerable<T>> List(
        ISpecification<T> specification)
    {
        return await ApplySpecification(specification)
            .ToListAsync();
    }

    public async Task<T> Insert(T entity)
    {
        Context.Add(entity);
        await Context.SaveChangesAsync();
        return entity;
    }

    public async Task Update(T entity)
    {
        Context.Update(entity);
        await Context.SaveChangesAsync();
    }

    public async Task Delete(T entity)
    {
        Context.Set<T>().Remove(entity);
        await Context.SaveChangesAsync();
    }

    private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    {
        return SpecificationEvaluator<T>.
           GetQuery(Context.Set<T>().AsQueryable(), spec);
    }

}
