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
        public ActionResult Blog()
        {
            return View();
        }

        public ActionResult Admin()
        {
            return View();
        }

        public ActionResult BlogCreate(Data data)
        {
            var dbContext = new BlogDbContext();

            dbContext.setBlog(data.Title, data.Content);

            return Blog();
        }


        public ActionResult Login(Data data)
        {
            return View(data);
        }

        public ActionResult TryLogin(Data data)
        {
            var dbContext = new BlogDbContext();
            var usernames = new List<string>();
            var passwords = new List<string>();
            usernames = dbContext.getUsernames().ToList();
            passwords = dbContext.getPasswords().ToList();
            Debug.WriteLine("Username: " + data.Username + " Password: " + data.Password);
            if (usernames.Contains(data.Username) && passwords.Contains(data.Password))
            {
                return View("Admin");
            }
            else
            {
                return View("Login", data);
            }
        }
    }
}