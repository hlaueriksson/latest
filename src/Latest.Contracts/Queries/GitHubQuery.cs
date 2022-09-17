using CommandQuery;

namespace Latest.Contracts.Queries
{
    public class GitHubData
    {
        public GitHubRepo Repo { get; set; }
    }

    public class GitHubRepo
    {
        public string Name { get; set; }
        public string Link { get; set; }
    }

    public class GitHubQuery : IQuery<GitHubData>
    {
    }
}
