using Octokit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubExcersize
{
   public static class Extentions
    {
        public static IEnumerable<RepoResult> ToRepoResult(this IEnumerable<Repository> gitHubRepos)
        {
            return gitHubRepos.Select(x => new RepoResult(x));
        }
    }
}
