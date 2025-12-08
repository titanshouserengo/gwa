import React, { useMemo } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { plans } from '../data';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = React.memo(() => {
  // Memoize the featured plans selection so it doesn't run on every render
  const featuredPlans = useMemo(() => [
    plans.find(p => p.id === 'general-mensual'),
    plans.find(p => p.id === 'asistido-4-dias'),
    plans.find(p => p.id === 'trimestral-asistido')
  ].filter(Boolean), []);

  return (
    <section id="plans" className="py-24 bg-titan-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white font-heading font-bold text-4xl uppercase mb-4">Planes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sin contratos forzosos. Sin matrícula. Elige entre entrenamiento asistido o libre.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-sm transition-all duration-300 ${plan?.recommended ? 'bg-zinc-800 border-2 border-titan-gold transform lg:-translate-y-4 shadow-2xl' : 'bg-zinc-900 border border-zinc-700'}`}
            >
              {plan?.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-titan-gold text-black px-4 py-1 font-bold uppercase text-sm tracking-wider rounded-sm z-10 w-max">
                  Más Popular
                </div>
              )}
              
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-heading font-bold text-white uppercase mb-2 h-14 flex items-center leading-tight">{plan?.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-titan-gold">{plan?.price}</span>
                  <span className="text-gray-400 ml-2 text-sm">{plan?.period}</span>
                </div>
                <div className="mt-4 text-green-400 font-bold text-sm uppercase flex items-center">
                  <Check className="h-4 w-4 mr-1" /> Matrícula GRATIS
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan?.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <Check className="h-5 w-5 text-titan-gold mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={`/plan/${plan?.id}`} className="w-full">
                <Button 
                  variant={plan?.recommended ? 'primary' : 'outline'} 
                  fullWidth
                >
                  Ver Detalles
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <Link to="/planes">
                <Button variant="primary" className="px-12 py-4 text-lg flex items-center group">
                    Ver Todos los Planes y Precios
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
});

Pricing.displayName = 'Pricing';