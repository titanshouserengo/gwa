import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src="https://github.com/Myraval1/titanshouseassets/raw/0c6ec7f1989e62f1ff71ba6a9cf6310fd529ba4a/nobglogo.png" 
            alt="Logo Titans House" 
            className="w-20 mr-2 rounded-full" 
            loading="lazy"
            width="80"
            height="80"
          />
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold text-white tracking-widest leading-none">TITANS</span>
            <span className="text-[10px] font-heading font-bold text-titan-gold tracking-widest leading-none">HOUSE</span>
          </div>
        </div>

        <div className="text-gray-500 text-sm mb-6 md:mb-0 text-center md:text-left">
          &copy; Gym Titans House. Todos los derechos reservados.<br/>
          Rengo, Chile.
        </div>

        <div className="flex space-x-6 md:mr-24">
          <a href="https://www.instagram.com/titans_house_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/people/Titans-house/61579827960944/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Facebook size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';