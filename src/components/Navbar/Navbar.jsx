import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          <span className="logo-mark">M</span>
          <span>Mohamed Rady</span>
        </a>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-contact"
            onClick={closeMenu}
          >
            Let's talk
          </a>
        </nav>

        <button
          className="navbar-menu"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;