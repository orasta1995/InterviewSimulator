using InterviewSimulator.Api.Hubs;
using InterviewSimulator.Api.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure Gemini options from appsettings
builder.Services.Configure<GeminiOptions>(builder.Configuration.GetSection("Gemini"));

// Add SignalR
builder.Services.AddSignalR();

// Add HttpClient for Gemini API
builder.Services.AddHttpClient("gemini");

// Register Gemini service
builder.Services.AddSingleton<IGeminiService, GeminiService>();

// Add controllers
builder.Services.AddControllers();

// Add Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Serve static files from wwwroot
app.UseDefaultFiles();  // enables index.html fallback
app.UseStaticFiles();

// Enable Swagger in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "AI Interview Simulator API V1");
        c.RoutePrefix = "swagger"; // Swagger stays at /swagger
    });
}

// Use HTTPS redirection
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

// Authorization (if you have any)
app.UseAuthorization();

// Map your API controllers
app.MapControllers();

// Map SignalR hub
app.MapHub<InterviewHub>("/hubs/interview");

// Optional: fallback for root URL if you want a simple message
// (not strictly necessary since UseDefaultFiles + UseStaticFiles will serve index.html)
app.MapGet("/api-status", () => "AI Interview Simulator API is running.");

app.Run("http://0.0.0.0:8080");
