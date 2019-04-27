using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AngularASPNETCoreSQLServer.Models
{
    public partial class AngularASPNETCoreSQLServerContext : DbContext
    {
        public AngularASPNETCoreSQLServerContext()
        {
        }

        public AngularASPNETCoreSQLServerContext(DbContextOptions<AngularASPNETCoreSQLServerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Astronauts> Astronauts { get; set; }
        public virtual DbSet<Nationalities> Nationalities { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost;Database=AngularASPNETCoreSQLServer;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Astronauts>(entity =>
            {
                entity.HasKey(e => e.AstronautId);

                entity.Property(e => e.AstronautId).HasColumnName("AstronautID");

                entity.Property(e => e.AstrunautName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nationality)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Nationalities>(entity =>
            {
                entity.HasKey(e => e.NationalityId);

                entity.Property(e => e.NationalityId).HasColumnName("NationalityID");

                entity.Property(e => e.Nationality)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
