import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Diferencia', href: '#features' },
  { label: 'Servicios', href: '#services' },
  { label: 'Planes', href: '#plans' },
  { label: 'Comunidad', href: '#community' },
  { label: 'Contacto', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/');
        // Give time for the home page to mount
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
  };

  const openWhatsApp = () => {
    const message = "Hola! Quiero mi prueba gratuita en Titans House.";
    window.open(`https://wa.me/56962169412?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-black/95 backdrop-blur-sm border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="bg-titan-gold p-2 rounded-full mr-2">
              <Dumbbell className="h-6 w-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white tracking-widest leading-none">TITANS</span>
              <span className="text-xs font-heading font-bold text-titan-gold tracking-widest leading-none">HOUSE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-300 hover:text-titan-gold font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="py-2 px-4 text-sm" onClick={openWhatsApp}>
              Prueba Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-titan-gold focus:outline-none"
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
          <div className="pt-4">
            <Button fullWidth onClick={openWhatsApp}>
              Solicitar Prueba Gratuita
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};