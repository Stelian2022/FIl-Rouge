namespace SeedWork;

public static class SeedWorkExtensions
{
    public static IServiceCollection AddSeedWork(
        this IServiceCollection services)
    {
        services.AddScoped(
            typeof(IRepository<>),
            typeof(EntityFrameworkRepository<>));

        return services;
    }
}