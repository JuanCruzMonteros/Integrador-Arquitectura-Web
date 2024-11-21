using Models.Entities;

namespace Data.interfaces
{
    public interface ITokenService
    {
        string crearToken(Usuario usuario);
    }
}
