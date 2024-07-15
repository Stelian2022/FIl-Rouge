namespace Interview.Middlewares;

public class CustomHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public CustomHeadersMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        context.Response.Headers["X-Frame-Options"] = "SAMEORIGIN";
        context.Response.Headers["X-Xss-Protection"] = "1";
        context.Response.Headers["X-Content-Type-Options"] = "nosniff";
        await _next(context);
    }
}

