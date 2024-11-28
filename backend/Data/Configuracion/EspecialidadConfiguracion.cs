﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Models.Entidades;

namespace Data.configs
{
    public class EspecialidadConfiguracion : IEntityTypeConfiguration<Especialidad>
    {

        public void Configure(EntityTypeBuilder<Especialidad> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.NombreEspecialidad).IsRequired().HasMaxLength(60);
            builder.Property(x => x.Descripcion).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Estado).IsRequired();
        }
    }
}