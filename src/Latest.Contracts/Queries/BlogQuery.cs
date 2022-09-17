using CommandQuery;

namespace Latest.Contracts.Queries
{
    public class BlogData
    {
        public string Title { get; set; }
        public DateTime Published { get; set; }
        public string Link { get; set; }
    }

    public class BlogQuery : IQuery<BlogData>
    {
    }
}
