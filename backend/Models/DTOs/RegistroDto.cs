﻿using System.ComponentModel.DataAnnotations;

namespace Models.DTOs
{
    public class RegistroDto
    {
        [Required(ErrorMessage = "Username es Requerido")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Password es Requerido")]
        [StringLength(10, MinimumLength = 4, ErrorMessage = "El password debe de ser Minimo 4 Maximo 10 caracteres")]
        public string Password { get; set; }
    }
}
