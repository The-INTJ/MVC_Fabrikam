﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Version.Controllers
{
    public class BlogController : Controller
    {
        // GET: Blog
        public ActionResult Login()
        {
            return View();
        }
    }
}