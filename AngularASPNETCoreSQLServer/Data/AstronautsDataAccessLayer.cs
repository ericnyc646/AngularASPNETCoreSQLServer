using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularASPNETCoreSQLServer.Models;

namespace AngularASPNETCoreSQLServer.Data
{
    public class AstronautsDataAccessLayer
    {
        AngularASPNETCoreSQLServerContext db = new AngularASPNETCoreSQLServerContext();

        public IEnumerable<Astronauts> GetAllAstronauts()
        {
            return db.Astronauts.ToList();
        }


        //CREATE   (C in Crud)
        public int AddAstronaut(Astronauts astronaut)
        {
            db.Astronauts.Add(astronaut);
            db.SaveChanges();

            int id = astronaut.AstronautId;
            return id;
        }

        //READ      (R in Crud)
        public Astronauts GetAstronautDetail(int id)
        {
            Astronauts astronaut = db.Astronauts.Find(id);
            return astronaut;
        }

        //UPDATE    (U in Crud)
        public int UpdateAstronaut(Astronauts astronaut) {
            db.Entry(astronaut).State = EntityState.Modified;
            db.SaveChanges();

            return astronaut.AstronautId;
        }

        //DELETE    (D in Crud)
        public int DeleteAstronaut(int id) {
            Astronauts astronaut = db.Astronauts.Find(id);
            db.Astronauts.Remove(astronaut);
            db.SaveChanges();
            return id;
        }


        //Referencial Data Get
        public List<Nationalities> GetNationalities() {
            return db.Nationalities.ToList();
        }


        
    }
}
