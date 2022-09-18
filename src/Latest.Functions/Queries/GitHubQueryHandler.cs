using CommandQuery;
using Latest.Contracts.Queries;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;

namespace Latest.Functions.Queries
{
    public class GitHubQueryHandler : IQueryHandler<GitHubQuery, GitHubData>
    {
        private readonly HttpClient _httpClient;
        private readonly IOptions<GitHubQueryOptions> _options;

        public GitHubQueryHandler(IHttpClientFactory httpClientFactory, IOptions<GitHubQueryOptions> options)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", options.Value.Username);
            _options = options;
        }

        public async Task<GitHubData> HandleAsync(GitHubQuery query, CancellationToken cancellationToken)
        {
            var url = $"https://api.github.com/users/{_options.Value.Username}/repos?sort=created";

            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var json = JArray.Parse(content);
            var repo = json.FirstOrDefault(x => !x.Value<bool>("fork"));

            return new GitHubData
            {
                Repo = new GitHubRepo
                {
                    Name = repo.Value<string>("full_name"),
                    Link = repo.Value<string>("html_url")
                }
            };
        }
    }
}
