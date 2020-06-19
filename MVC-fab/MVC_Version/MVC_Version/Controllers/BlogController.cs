using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC_Version.Models;

namespace MVC_Version.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult Login(Data data)
        {
            return View(data);
        }

        public ActionResult TryLogin(Data data)
        {
            Debug.WriteLine("Heyyyyy");
            Debug.WriteLine(data.Username);
            var dbContext = new BlogDbContext();
            var usernames = new List<string>();
            usernames = dbContext.getUsernames().ToList();
            if (usernames.Contains(data.Username))
            {
                return View("~/Views/Home/Index.cshtml");
            }
            else
            {
                return View("Login", data);
            }
        }
    }
}