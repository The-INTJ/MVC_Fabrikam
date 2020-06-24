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
        public ActionResult Blog(Data data)
        {
            if (data.Title is null)
            {
                data.SetList();
            }


            return View(data);
        }

        public ActionResult Admin()
        {
            return View();
        }

        public ActionResult CreateBlog(Data data)
        {
            var dbContext = new BlogDbContext();
            // Detect if new author, set id if not
            var authorId = 0;
            bool createNewAuthor = !(dbContext.getAuthorName(data.Author).ToList().Contains(data.Author));
            Console.WriteLine(data.Author);
            if (createNewAuthor)
            {
                dbContext.setAuthor(data.Author);
            }

            try
            {
                authorId = (int) dbContext.getAuthorId(data.Author).ToList()[0];
            }
            catch (SystemException e)
            {
                authorId = 1;
            }

            dbContext.setBlog(data.Title, data.Content, authorId, data.Created);
            data.IsNew = true;
            return View("Blog", data);
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