using Data;
using Data.interfaces;
using Data.services;
using Microsoft.AspNetCore.Authorization;
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
        private readonly ITokenService _tokenService;

        public UsuarioController(ApplicationDbContext db, ITokenService tokenService)
        {
            _db = db;
            _tokenService = tokenService;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            var usuarios = await _db.Usuarios.ToListAsync();
            return usuarios;
        }

        [Authorize]
        [HttpGet("{id}")] // api /usuario/1
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios(int id)
        {
            var usuario = await _db.Usuarios.FindAsync(id);
            return Ok(usuario);
        }

        [HttpPost("registro")]
        public async Task<ActionResult<UsuarioDto>> Registro(RegistroDto registroDto)
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
            return new UsuarioDto
            {
                Username = usuario.Username,
                Token = _tokenService.crearToken(usuario)
            };
        }

        [HttpPost("login")] //api/usuario/login
        public async Task<ActionResult<UsuarioDto>> Login(LoginDto loginDto)
        {
            var usuario = await _db.Usuarios.SingleOrDefaultAsync(x => x.Username == loginDto.Username.ToLower());

            if (usuario == null) return BadRequest("usuario no valido");

            using var hmac = new HMACSHA512(usuario.PasswordSalt);
            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (var i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != usuario.PasswordHash[i]) return Unauthorized("Password no valido");
            };
            return new UsuarioDto
            {
                Username = usuario.Username,
                Token = _tokenService.crearToken(usuario)
            };
        }

        private async Task<bool> UsuarioExiste( string username )
        {
            return await _db.Usuarios.AnyAsync(x => x.Username == username.ToLower());
        }
    }
}
