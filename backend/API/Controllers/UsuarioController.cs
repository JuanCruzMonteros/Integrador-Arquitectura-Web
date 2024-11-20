using Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Entities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public UsuarioController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Usuario>> GetUsuarios()
        {
            var usuarios = _db.Usuarios.ToList();
            return usuarios;
        }

        [HttpGet("{id}")] // api /usuario/1
        public ActionResult<IEnumerable<Usuario>> GetUsuarios(int id)
        {
            var usuario = _db.Usuarios.Find(id);
            return Ok(usuario);
        }
    }
}
