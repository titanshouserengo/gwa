import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { plans } from '../data';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-24 bg-titan-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white font-heading font-bold text-4xl uppercase mb-4">Elige tu Desafío</h2>
          <p className="text-gray-400 text-lg">Sin letras chicas. Sin matrículas ocultas. Solo entrenamiento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-sm transition-all duration-300 ${plan.recommended ? 'bg-zinc-800 border-2 border-titan-gold transform md:-translate-y-4 shadow-2xl' : 'bg-zinc-900 border border-zinc-700'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-titan-gold text-black px-4 py-1 font-bold uppercase text-sm tracking-wider rounded-sm">
                  Más Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-titan-gold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <div className="mt-4 text-green-400 font-bold text-sm uppercase flex items-center">
                  <Check className="h-4 w-4 mr-1" /> Matrícula GRATIS
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <Check className="h-5 w-5 text-titan-gold mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to={`/plan/${plan.id}`} className="w-full">
                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  fullWidth
                >
                  Ver Detalles del Plan
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};