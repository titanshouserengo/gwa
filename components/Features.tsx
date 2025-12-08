import React from 'react';
import { Wallet, Unlock, Award } from 'lucide-react';

// --- EASY EDIT CONFIGURATION ---
const FEATURES_LAYOUT = Object.freeze({
  overlap: "-mt-32 md:-mt-20",
  padding: "py-20 md:py-40",
  titleSize: "text-2xl",
  cardBg: "bg-zinc-900"
});

export const Features: React.FC = React.memo(() => {
  const features = [
    {
      icon: <Wallet className="h-10 w-10 text-titan-gold" />,
      title: "Matrícula GRATIS",
      description: "Olvídate de pagar por inscribirte. En Titans House, tu inversión va directo a tu entrenamiento y bienestar desde el primer día."
    },
    {
      icon: <Unlock className="h-10 w-10 text-titan-gold" />,
      title: "Sin Cláusula de Permanencia",
      description: "Creemos en la libertad. Entrena porque quieres, no porque un contrato te obliga. Cancela cuando lo necesites sin multas."
    },
    {
      icon: <Award className="h-10 w-10 text-titan-gold" />,
      title: "Entrenadores Certificados",
      description: "No estás solo. Nuestro equipo de profesionales te guiará con planes personalizados para alcanzar tus metas de forma segura."
    }
  ];

  return (
    <section id="features" className={`${FEATURES_LAYOUT.padding} bg-titan-dark relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Beneficios Titans House</h2>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 ${FEATURES_LAYOUT.overlap}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${FEATURES_LAYOUT.cardBg} border-b-4 border-titan-gold p-8 rounded-sm shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="bg-zinc-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className={`${FEATURES_LAYOUT.titleSize} font-heading font-bold text-white mb-4 uppercase`}>{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';