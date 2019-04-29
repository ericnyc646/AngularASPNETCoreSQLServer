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
    public class AstronautController : ControllerBase
    {

        AstronautsDataAccessLayer astronautsDL = new AstronautsDataAccessLayer();

        [HttpGet]
        [Route("api/astronaut/Index")]
        public IEnumerable<Astronauts> Index() {
            return astronautsDL.GetAllAstronauts();
        }


        [HttpPost]
        [Route("api/astronaut/Create")]
        public int Create([FromBody] Astronauts astronaut) {
            return astronautsDL.AddAstronaut(astronaut);
        }


        [HttpGet]
        [Route("api/astronaut/Details/{id}")]
        public Astronauts Details(int id) {
            return astronautsDL.GetAstronautDetail(id);
        }


        [HttpPut]
        [Route("api/astronaut/Edit")]
        public int Edit([FromBody] Astronauts astronaut) {
            return astronautsDL.UpdateAstronaut(astronaut);
        }


        [HttpDelete]
        [Route("api/astronaut/Delete/{id}")]
        public int Delete(int id) {
            return astronautsDL.DeleteAstronaut(id);
        }


    }
}