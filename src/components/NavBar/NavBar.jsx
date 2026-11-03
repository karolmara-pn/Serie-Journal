
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        <span className="brand-icon">S</span>
        <span>Serie Journal</span>
      </NavLink>

      <nav className="navbar-links">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/cadastro">Cadastrar série</NavLink>
        <NavLink to="/series">Minhas séries</NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
