import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Carboard</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/car-list" onClick={toggleMenu}>Lista de carros</Link>
          </li>
          <li>
            <Link to="/add-car" onClick={toggleMenu}>Adicionar carro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
