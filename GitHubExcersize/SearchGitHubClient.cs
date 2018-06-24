using Octokit;
using System.Collections.Generic;
using System.Linq;

namespace GitHubExcersize
{
    public class SearchGitHubClient
    {
        public static IEnumerable<RepoResult>  SearchRepositories(string term)
        {
            var client = new GitHubClient(new ProductHeaderValue("fnxExcersize"));

            var request = new SearchRepositoriesRequest(term);

            var itms =  client.Search.SearchRepo(request).Result.Items ;
            return itms.ToRepoResult();
        }
    }
   
}
