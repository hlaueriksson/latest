using CommandQuery.Client;
using Latest.Web;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Options;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Options
var http = new HttpClient()
{
    BaseAddress = new Uri(builder.HostEnvironment.BaseAddress),
};
using var response = await http.GetAsync("appsettings.json");
using var stream = await response.Content.ReadAsStreamAsync();
builder.Configuration.AddJsonStream(stream);
builder.Services.AddOptions<FunctionsOptions>().Bind(builder.Configuration.GetSection(nameof(FunctionsOptions)));
builder.Services.AddOptions<GravatarOptions>().Bind(builder.Configuration.GetSection(nameof(GravatarOptions)));
builder.Services.AddOptions<SpotifyOptions>().Bind(builder.Configuration.GetSection(nameof(SpotifyOptions)));
builder.Services.AddOptions<TwitterOptions>().Bind(builder.Configuration.GetSection(nameof(TwitterOptions)));

builder.Services.AddHttpClient<IQueryClient, QueryClient>((provider, client) =>
{
    var options = provider.GetRequiredService<IOptions<FunctionsOptions>>();

    client.BaseAddress = new Uri(options.Value.QueryUrl);
    client.Timeout = TimeSpan.FromSeconds(10);
});

await builder.Build().RunAsync();
