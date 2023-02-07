using Microsoft.AspNetCore.Mvc;
using mission4_sweet28.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission4_sweet28.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            // throw new IndexOutOfRangeException();
            return View();
        }

        [HttpGet]
        public IActionResult Calculator()
        {
            // throw new IndexOutOfRangeException();
            return View();
        }

        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
