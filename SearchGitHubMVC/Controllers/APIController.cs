using GitHubExcersize;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SearchGitHubMVC.Controllers
{
    public class APIController : Controller
    {
        public JsonResult Search(string term)
        {
            if (string.IsNullOrEmpty(term))
                return null;
            var ret =  SearchGitHubClient.SearchRepositories(term).ToList();
            var repos = (List<RepoResult>)Session["repos"];
            if (repos != null)
            {
                IEnumerable<RepoResult> toMark = ret.Where(x => repos.Any(y => y.ID == x.ID));
                foreach (var item in toMark)
                {
                    item.Marked = true;
                }
            }
            return Json(ret, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Bookmark(RepoResult bookmarkRepo)
        {
            bookmarkRepo.Marked = true;
                var repos = (List<RepoResult>)Session["repos"];
            if (repos == null)
            {
                repos = new List<RepoResult>();
            }
            if (repos.All(x => x.ID != bookmarkRepo.ID))
            {
                repos.Add(bookmarkRepo);
                Session["repos"] = repos;
            }
            
            return Json(bookmarkRepo,JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult GetBookmarks()
        {
            var repos = (List<RepoResult>)Session["repos"];
            if (repos == null)
            {
                repos = new List<RepoResult>();
            }
            return Json(repos, JsonRequestBehavior.AllowGet);
        }
    }
}