import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Gimnasio', href: '/gimnasio' },
  { label: 'Planes', href: '#plans' },
  { label: 'Comunidad', href: '#community' },
  { label: 'Contacto', href: '#contact' },
];

// --- EASY EDIT CONFIGURATION ---
const NAV_CONFIG = Object.freeze({
  logoPaddingTop: "py-4", 
  logoPaddingScrolled: "py-2",
  menuGap: "gap-4 lg:gap-8",
  bgScrolled: "bg-black/95 backdrop-blur-sm"
});

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  }, [location.pathname, navigate]);

  const openWhatsApp = useCallback(() => {
    const message = "Hola! Quiero mi prueba gratuita en Titans House.";
    // Security: noopener,noreferrer prevents tabnabbing
    window.open(
      `https://wa.me/56962169412?text=${encodeURIComponent(message)}`, 
      '_blank', 
      'noopener,noreferrer'
    );
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? `${NAV_CONFIG.bgScrolled} border-b border-white/10 ${NAV_CONFIG.logoPaddingScrolled}` : `bg-transparent ${NAV_CONFIG.logoPaddingTop}`}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#home')}>
            <img 
              src="https://github.com/Myraval1/titanshouseassets/raw/0c6ec7f1989e62f1ff71ba6a9cf6310fd529ba4a/nobglogo.png" 
              alt="Logo Titans House" 
              className="w-20 mr-2 rounded-full"
              width="80"
              height="80" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white tracking-widest leading-none">TITANS</span>
              <span className="text-xs font-heading font-bold text-titan-gold tracking-widest leading-none">HOUSE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center ${NAV_CONFIG.menuGap}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-300 hover:text-titan-gold font-medium transition-colors text-xs lg:text-sm uppercase tracking-wide whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="py-2 px-3 lg:px-4 text-xs lg:text-sm whitespace-nowrap" onClick={openWhatsApp}>
              Prueba Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-titan-gold focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 text-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block px-3 py-3 text-white hover:text-titan-gold font-heading uppercase text-lg"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};