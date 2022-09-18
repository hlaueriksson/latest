using CommandQuery;
using CommandQuery.AzureFunctions;
using Latest.Contracts.Queries;
using Latest.Functions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureAppConfiguration(ConfigureAppConfiguration)
    .ConfigureServices(ConfigureServices)
    .Build();

// Validation
host.Services.GetService<IQueryProcessor>()!.AssertConfigurationIsValid();

host.Run();

void ConfigureAppConfiguration(HostBuilderContext hostingContext, IConfigurationBuilder config)
{
    config.AddJsonFile("appsettings.json");
}

void ConfigureServices(IServiceCollection services)
{
    services.AddQueryFunction(typeof(Program).Assembly, typeof(BlogQuery).Assembly);

    services.AddHttpClient();

    // Options
    services.AddOptions<BlogQueryOptions>().Configure<IConfiguration>((settings, configuration) =>
    {
        configuration.GetSection(nameof(BlogQueryOptions)).Bind(settings);
    });
    services.AddOptions<GitHubQueryOptions>().Configure<IConfiguration>((settings, configuration) =>
    {
        configuration.GetSection(nameof(GitHubQueryOptions)).Bind(settings);
    });
    services.AddOptions<InstagramQueryOptions>().Configure<IConfiguration>((settings, configuration) =>
    {
        configuration.GetSection(nameof(InstagramQueryOptions)).Bind(settings);
    });
}
