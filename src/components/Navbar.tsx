import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav>
      <ul className="navbar">
        <li className={location.pathname === '/' ? 'active-link' : ''}>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className={location.pathname === '/starships' ? 'active-link' : ''}>
          <NavLink to="/starships">STARSHIPS</NavLink>
        </li>
        {/* Afegeix més botons de navegació segons sigui necessari */}
      </ul>
    </nav>
  );
}

export default Navbar;
