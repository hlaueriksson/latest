using Latest.Web;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Options
var http = new HttpClient()
{
    BaseAddress = new Uri(builder.HostEnvironment.BaseAddress),
};
builder.Services.AddScoped(sp => http);
using var response = await http.GetAsync("appsettings.json");
using var stream = await response.Content.ReadAsStreamAsync();
builder.Configuration.AddJsonStream(stream);
builder.Services.AddOptions<BlogOptions>().Bind(builder.Configuration.GetSection(nameof(BlogOptions)));
builder.Services.AddOptions<GitHubOptions>().Bind(builder.Configuration.GetSection(nameof(GitHubOptions)));
builder.Services.AddOptions<GravatarOptions>().Bind(builder.Configuration.GetSection(nameof(GravatarOptions)));
builder.Services.AddOptions<InstagramOptions>().Bind(builder.Configuration.GetSection(nameof(InstagramOptions)));
builder.Services.AddOptions<SpotifyOptions>().Bind(builder.Configuration.GetSection(nameof(SpotifyOptions)));
builder.Services.AddOptions<TwitterOptions>().Bind(builder.Configuration.GetSection(nameof(TwitterOptions)));

await builder.Build().RunAsync();
