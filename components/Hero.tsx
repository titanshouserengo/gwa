import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [hoursText, setHoursText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
    let closingTime = "";

    // Mon (1) to Fri (5)
    if (today >= 1 && today <= 5) {
      closingTime = "23:00";
    } 
    // Saturday (6)
    else if (today === 6) {
      closingTime = "14:00";
    } 
    // Sunday (0)
    else {
      closingTime = "14:00";
    }

    setHoursText(`Abierto Hoy hasta las ${closingTime}`);
  }, []);

  const openWhatsAppFreeTrial = () => {
    const message = "Hola! Quiero mi prueba gratuita en Titans House.";
    window.open(`https://wa.me/56962169412?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToCommunity = () => {
    const element = document.getElementById('community');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Titans House Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-titan-gold/20 border border-titan-gold/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm animate-fade-in-up">
            <MapPin className="h-4 w-4 text-titan-gold" />
            <span className="text-titan-gold text-sm font-medium tracking-wide uppercase">Ubicados en Rengo, Chile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight uppercase">
            Transforma tu cuerpo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-titan-gold to-yellow-200">
              Libera tu Titán
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl">
            Únete a la Familia Titans. Entrena sin límites, sin contratos forzosos y con matrícula <span className="text-titan-gold font-bold">TOTALMENTE GRATIS</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openWhatsAppFreeTrial} className="group flex items-center justify-center gap-2">
              Comienza tu Prueba Gratuita
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={scrollToCommunity}>
              Ver Comunidad
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-sm text-gray-400 font-medium">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>{hoursText}</span>
             </div>
             <div className="hidden sm:block">|</div>
             <div>Rinconada de Malambo 1670-B</div>
          </div>
        </div>
      </div>
    </section>
  );
};