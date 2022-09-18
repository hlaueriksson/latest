using System.Xml.Linq;
using CommandQuery;
using Latest.Contracts.Queries;
using Microsoft.Extensions.Options;

namespace Latest.Functions.Queries
{
    public class BlogQueryHandler : IQueryHandler<BlogQuery, BlogData>
    {
        private readonly HttpClient _httpClient;
        private readonly IOptions<BlogQueryOptions> _options;

        public BlogQueryHandler(IHttpClientFactory httpClientFactory, IOptions<BlogQueryOptions> options)
        {
            _httpClient = httpClientFactory.CreateClient();
            _options = options;
        }

        public async Task<BlogData> HandleAsync(BlogQuery query, CancellationToken cancellationToken)
        {
            var response = await _httpClient.GetAsync(_options.Value.FeedUrl);
            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var xml = XDocument.Parse(content);
            var ns = xml.Root.Name.Namespace;
            var entry = xml.Root.Element(ns + "entry");

            return new BlogData
            {
                Title = entry.Element(ns + "title").Value,
                Published = DateTime.Parse(entry.Element(ns + "published").Value),
                Link = entry.Element(ns + "link").Attribute("href").Value
            };
        }
    }
}
