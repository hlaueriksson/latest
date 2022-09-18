using CommandQuery;

namespace Latest.Contracts.Queries
{
    public class InstagramData
    {
        public string Html { get; set; }
    }

    public class InstagramQuery : IQuery<InstagramData>
    {
    }
}
