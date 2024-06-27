using Interview.Middlewares;

namespace Interview.Extensions;

public static class ApplicationMiddlewareExtensions
{
    public static IApplicationBuilder UseCustomHeaders(
        this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<CustomHeadersMiddleware>();
    }
}

