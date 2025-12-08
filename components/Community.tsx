import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

export const Community: React.FC = React.memo(() => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos M.",
      role: "Miembro hace 6 meses",
      text: "El ambiente es increíble. No es el típico gimnasio donde nadie te habla. Aquí realmente te sientes parte de una familia. Los profes son secos.",
    },
    {
      name: "Fernanda R.",
      role: "Miembro hace 1 año",
      text: "Me encanta que no te amarren con contratos. Vine por un mes y me quedé por la buena onda y los resultados. Las clases grupales son fuego.",
    },
    {
      name: "Jorge V.",
      role: "Powerlifter",
      text: "El equipamiento está a otro nivel para entrenar pesado en Rengo. Barras olímpicas de calidad y piso apto para peso muerto.",
    }
  ];

  return (
    <section id="community" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-titan-gold font-heading font-bold text-xl tracking-widest uppercase mb-2">Comunidad Titans</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Entrena con tu <br/><span className="text-titan-red">Segunda Familia</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              En Titans House, celebramos cada logro. Desde tu primer día hasta tu récord personal, siempre tendrás a alguien alentándote. Organizamos asados, competencias internas y salidas outdoor.
            </p>
            <div className="grid grid-cols-3 gap-2">
                <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop" className="rounded-lg h-32 w-full object-cover hover:opacity-80 transition" alt="Eventos gimnasio Titans House Rengo" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop" className="rounded-lg h-32 w-full object-cover hover:opacity-80 transition" alt="Clases grupales fitness en Rengo" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop" className="rounded-lg h-32 w-full object-cover hover:opacity-80 transition" alt="Comunidad fitness Rengo gimnasio" loading="lazy" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-zinc-900 p-8 rounded-sm border-l-4 border-titan-gold">
            <h4 className="text-2xl font-bold text-white mb-6 uppercase">Lo que dicen los Titanes</h4>
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-white">{t.name}</h5>
                        <span className="text-xs text-gray-500 bg-black px-2 py-0.5 rounded">{t.role}</span>
                      </div>
                      <div className="flex text-titan-gold">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm italic">"{t.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Community.displayName = 'Community';