using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace WinAuthApp.Controllers
{
    [Route("api/[controller]")]
   
    public class SampleDataController : Controller
    {
        private Serilog.ILogger _logger;
        public SampleDataController(Serilog.ILogger logger)
        {
            _logger = logger;
        }


        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var userName = this.User.Identity.Name.Replace("CALEMA\\", "");

            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)],
                UserName = userName
            });
        }

        [HttpGet]
        public IActionResult TestSeriLog()
        {
            try
            {
                int a, b, c;
                a = 10;
                b = 0;
                c = a / b;
            }
            
            catch (Exception ex)
            {
                _logger.Error(ex.Message);
            }


            return null;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public string UserName { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
