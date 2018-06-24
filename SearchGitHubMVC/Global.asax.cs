using GitHubExcersize;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace SearchGitHubMVC
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
        public static List<RepoResult> SetSession(RepoResult repo)
        {
            var repos =(List<RepoResult>) HttpContext.Current.Session["repos"];
            if (repos == null)
                repos = new List<RepoResult>();
            repos.Add(repo);
            return repos;
        }
        protected void Application_Error()
        {
            var ex = Server.GetLastError();
            //log the error!
            
        }
    }
}
