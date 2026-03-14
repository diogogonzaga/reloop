import'./Header.css'
import logo from"../assets/logo.png"
export function Header()
{
 return(
 <header className="header">
      <div className="header-container">

        <div className="logo">
         <img src={logo} alt="Logo" />
        </div>

        <nav className="nav">
          <a href="/">Explorar</a>
          <a href="/categorias">Categorias</a>
          <a href="/como-funciona">Como funciona</a>
        </nav>

        <div className="search">
          <input type="text" placeholder="Procurar objetos..." />
        </div>

        <div className="actions">
          <button className="post-button">+ Publicar</button>
          <button className="login-button">Entrar</button>
        </div>

      </div>
    </header>
 );
}
export default Header;