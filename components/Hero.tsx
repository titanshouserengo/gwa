import React, { useEffect, useState, useCallback } from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- EASY EDIT CONFIGURATION ---
const HERO_STYLE_GUIDE = Object.freeze({
  paddingTop: "pt-24 md:pt-28 lg:pt-28",
  paddingBottom: "pb-40 md:pb-32",
  titleSize: "text-5xl md:text-7xl",
  subtitleSize: "text-xl md:text-2xl",
  buttonSpacing: "gap-4",
  footerSpacing: "mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-sm text-gray-400 font-medium w-full"
});

// Asset Constants
const MOBILE_ASSET_URL = "https://0170a6c2.assets-581.pages.dev/mobileherovideogit.mp4";
const DESKTOP_ASSET_URL = "https://0170a6c2.assets-581.pages.dev/gym1.jpg";

export const Hero: React.FC = () => {
  const [hoursText, setHoursText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const calculateHours = async () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const todayString = `${year}-${month}-${day}`;
      const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat

      // 1. Determine standard closing time based on weekday
      let standardClosingTime = (dayOfWeek >= 1 && dayOfWeek <= 5) ? "23:00" : "14:00";

      if (isMounted) {
        setHoursText(`Abierto Hoy hasta las ${standardClosingTime}`);
      }

      // 2. Check if today is a holiday via API
      let isHoliday = false;

      try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CL`);
        
        if (response.ok) {
          const data = await response.json();
          // Use a Set for O(1) lookup
          const holidayDates = new Set(data.map((h: any) => h.date));
          if (holidayDates.has(todayString)) {
            isHoliday = true;
          }
        } else {
          throw new Error("Failed to fetch holidays");
        }
      } catch (error) {
        // Fallback for 2025 fixed holidays
        const fixedHolidays2025 = [
            "2025-01-01", "2025-04-18", "2025-04-19", "2025-05-01", 
            "2025-05-21", "2025-06-20", "2025-06-29", "2025-07-16", 
            "2025-08-15", "2025-09-18", "2025-09-19", "2025-10-12", 
            "2025-10-31", "2025-11-01", "2025-12-08", "2025-12-25"
        ];
        if (fixedHolidays2025.includes(todayString)) {
            isHoliday = true;
        }
      }

      // 3. Override closing time if it is a holiday
      if (isHoliday && isMounted) {
        setHoursText(`Abierto Hoy hasta las 14:00`);
      }
    };

    calculateHours();

    return () => { isMounted = false; };
  }, []);

  const openWhatsApp = useCallback(() => {
    window.open(
        `https://wa.me/56962169412?text=${encodeURIComponent("Hola! Quiero mi prueba gratuita en Titans House.")}`, 
        '_blank', 
        'noopener,noreferrer'
    );
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-black overflow-hidden">
      
      {/* Mobile Video Background */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={MOBILE_ASSET_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-black/70"></div>
      </div>

      {/* Desktop/Tablet Image Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img 
          src={DESKTOP_ASSET_URL} 
          alt="Gimnasio Titans House en Rengo Chile - Entrenamiento funcional y pesas" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full w-full ${HERO_STYLE_GUIDE.paddingTop} ${HERO_STYLE_GUIDE.paddingBottom}`}>
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center gap-2 bg-titan-gold/10 border border-titan-gold/30 rounded-full px-4 py-1.5 mb-4 md:mb-6 backdrop-blur-sm">
            <MapPin size={14} className="text-titan-gold" />
            <span className="text-titan-gold text-xs font-bold tracking-widest uppercase">Ubicados en Rengo, Chile</span>
          </div>
          
          <h1 className={`${HERO_STYLE_GUIDE.titleSize} font-heading font-bold text-white uppercase leading-tight mb-2 md:mb-6`}>
            TITANS HOUSE | <br/>
            <span className="text-titan-gold">PRUEBA 1 DÍA GRATIS</span>
          </h1>
          
          <p className={`${HERO_STYLE_GUIDE.subtitleSize} text-gray-200 mb-6 md:mb-8 font-light max-w-2xl leading-relaxed`}>
            Tu <strong className="text-white">gimnasio en Rengo</strong> sin contratos forzosos. Disfruta de <strong className="text-white">entrenamiento asistido</strong> o libre, con matrícula GRATIS y un ambiente que te impulsa a dar más.
          </p>
          
          <div className={`flex flex-col sm:flex-row ${HERO_STYLE_GUIDE.buttonSpacing} mb-6 md:mb-0`}>
            <Button 
                onClick={openWhatsApp}
                className="text-lg px-8 py-4 flex items-center justify-center group"
            >
              PRUEBA GRATUITA <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
                variant="outline" 
                className="text-lg px-8 py-4 text-center"
                onClick={() => navigate('/planes')}
            >
              VER PLANES
            </Button>
          </div>

          <div className={HERO_STYLE_GUIDE.footerSpacing}>
            <div className="flex items-center gap-2">
              <div className="w-5 flex justify-center md:w-auto">
                 <div className={`w-2 h-2 rounded-full ${hoursText.includes("23:00") || hoursText.includes("14:00") ? "bg-green-500" : "bg-red-500"} animate-pulse`}></div>
              </div>
              <span>{hoursText}</span>
            </div>
            
            <span className="hidden md:block text-zinc-600">|</span>
            
            <div className="flex items-center gap-2">
               <div className="md:hidden w-5 flex justify-center">
                  <MapPin size={16} className="text-titan-gold" />
               </div>
               <span>Rinconada de Malambo 1670-B</span>
            </div>

            <span className="hidden md:block text-zinc-600">|</span>

            <div className="flex items-center gap-2 mt-0 md:mt-0">
               <div className="w-5 flex justify-center">
                  <Car size={16} className="text-titan-gold" />
               </div>
               <span className="text-titan-gold font-bold">Estacionamiento Privado Gratuito</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};