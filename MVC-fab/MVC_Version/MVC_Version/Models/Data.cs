using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace MVC_Version.Models
{
    public class Data
    {

        public string Username { get; set; }

        public string Password { get; set; }

        public string Author { get; set; }

        public DateTime Created { get; set; }

        public string Title { get; set; }

        public string Content { get; set; }

        public List<Models.blog> Blogs { get; set; }

        public void SetList()
        {
            Blogs = new List<Models.blog>();
            var blogsInDatabase = new BlogDbContext().getRecentBlogAndInfo().ToList();

            foreach (Models.blog blog in blogsInDatabase)
            {
                Blogs.Add(blog);
            }


        }
    }
}