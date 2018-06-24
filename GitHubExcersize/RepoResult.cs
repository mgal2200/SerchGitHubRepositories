namespace GitHubExcersize
{
    using Octokit;
    public class RepoResult
    {
        public RepoResult()
        {

        }
        public RepoResult(Repository repo)
        {
            this.Name = repo.Name;
            this.AvatarUrl = repo.Owner.AvatarUrl;
            this.ID = repo.Id;
        }
        public long ID { get; set; }
        public string Name { get; set; }
        public string AvatarUrl { get; set; }
        public bool Marked { get; set; }
    }
}