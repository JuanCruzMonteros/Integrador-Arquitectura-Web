using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.DTOs;
using Models.Entities;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class UsuarioController : BaseApiController
    {
        private readonly ApplicationDbContext _db;

        public UsuarioController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            var usuarios = await _db.Usuarios.ToListAsync();
            return usuarios;
        }

        [HttpGet("{id}")] // api /usuario/1
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios(int id)
        {
            var usuario = await _db.Usuarios.FindAsync(id);
            return Ok(usuario);
        }

        [HttpPost("registro")]
        public async Task<ActionResult<Usuario>> Registro(RegistroDto registroDto)
        {
            if (await UsuarioExiste(registroDto.Username)) return BadRequest("Ese usuario ya se encuentra registrado");
            
            using var hmac = new HMACSHA512();

            var usuario = new Usuario
            {
                Username = registroDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registroDto.Password)),
                PasswordSalt = hmac.Key
            };
            _db.Usuarios.Add(usuario);
            await _db.SaveChangesAsync();
            return Ok(usuario);
        }

        private async Task<bool> UsuarioExiste( string username )
        {
            return await _db.Usuarios.AnyAsync(x => x.Username == username.ToLower());
        }
    }
}
