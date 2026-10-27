import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/freelance', 'Services'],
  ['/resume', 'Resume'],
  ['/contact', 'Contact'],
];

export default function Navbar({ open, setOpen }) {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link className="brand" to="/" aria-label="Swayam home">
          <span className="brand-mark">S/</span>
          <span className="brand-copy">
            <strong>Swayam Sood</strong>
            <small>SDET / QA</small>
          </span>
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}

          <Link className="nav-cta" to="/contact">
            Let's Talk <ArrowUpRight size={14} />
          </Link>
        </div>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
