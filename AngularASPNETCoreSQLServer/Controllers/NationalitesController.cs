using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularASPNETCoreSQLServer.Data;
using AngularASPNETCoreSQLServer.Models;

namespace AngularASPNETCoreSQLServer.Controllers
{
    public class NationalitesController : ControllerBase
    {

        AstronautsDataAccessLayer astronautsDL = new AstronautsDataAccessLayer();

        [HttpGet]
        [Route("api/nationalities/Index")]
        public IEnumerable<Nationalities> Index()
        {
            return astronautsDL.GetNationalities();
        }
    }
}