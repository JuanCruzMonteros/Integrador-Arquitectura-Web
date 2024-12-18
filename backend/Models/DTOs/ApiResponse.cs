﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Models.DTOs
{
    public class ApiResponse
    {
        public HttpStatusCode StatusCode { get; set; }  // Ejemplos 200, 400, 500
        public bool IsExitoso { get; set; }

        public string Mensaje { get; set; }
        public object Resultado { get; set; }  // Ejemplos List, Entidad
    }
}