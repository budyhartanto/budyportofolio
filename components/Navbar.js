'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar fade-in">
      <div className="nav-logo">Hartanto.</div>

      {/* Desktop Menu */}
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button
        className="mobile-menu-btn"
        style={{ display: 'none' }} // Controlled by CSS media query
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Inline styles for the hamburger button to only show on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
