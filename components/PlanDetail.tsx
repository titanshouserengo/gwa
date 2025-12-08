import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, ShieldCheck, Star } from 'lucide-react';
import { Button } from './Button';
import { plans } from '../data';

export const PlanDetail: React.FC = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const plan = plans.find(p => p.id === planId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!plan) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-heading mb-4">Plan no encontrado</h2>
        <Button onClick={() => navigate('/planes')}>Volver a Planes</Button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hola! Me interesa inscribirme en el ${plan.name} de Titans House.`;
    window.open(
        `https://wa.me/56962169412?text=${encodeURIComponent(message)}`, 
        '_blank',
        'noopener,noreferrer'
    );
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/planes');
  };

  return (
    <div className="min-h-screen bg-black pt-32 md:pt-40 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <a href="#" onClick={handleBack} className="inline-flex items-center text-gray-400 hover:text-titan-gold mb-8 transition-colors cursor-pointer">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Todos los Planes
        </a>

        <div className="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl relative">
          
          {/* Header */}
          <div className="bg-zinc-800 p-8 border-b border-zinc-700 relative overflow-hidden">
             {plan.recommended && (
                <div className="mb-4 lg:mb-0 lg:absolute lg:top-4 lg:right-4 inline-block bg-titan-gold text-black px-3 py-1 font-bold uppercase text-xs tracking-wider rounded-sm">
                  Recomendado
                </div>
              )}
             <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">{plan.name}</h1>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit ${plan.category === 'asistido' ? 'bg-blue-900 text-blue-200' : 'bg-zinc-700 text-zinc-300'}`}>
                    {plan.category === 'asistido' ? 'Con Entrenador' : 'General'}
                </span>
             </div>
             <p className="text-gray-400 text-lg max-w-xl">{plan.description}</p>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Pricing & CTA */}
            <div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl md:text-6xl font-bold text-titan-gold">{plan.price}</span>
                <span className="text-xl text-gray-400 ml-2 font-medium">{plan.period}</span>
              </div>
              
              <div className="bg-black/50 p-4 rounded-sm border border-zinc-800 mb-8">
                 <div className="flex items-center text-green-400 font-bold uppercase text-sm mb-2">
                    <Check className="h-4 w-4 mr-2" /> Matrícula GRATIS
                 </div>
                 <div className="flex items-center text-gray-300 text-sm">
                    <ShieldCheck className="h-4 w-4 mr-2 text-titan-gold" /> Sin contrato de permanencia
                 </div>
              </div>

              <Button 
                variant="primary" 
                fullWidth 
                className="text-lg py-4 mb-4"
                onClick={handleWhatsApp}
              >
                Inscribirme Ahora
              </Button>
              <p className="text-center text-xs text-gray-500">
                Serás redirigido a completar el pago.
              </p>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white uppercase mb-6 flex items-center">
                <Star className="h-5 w-5 text-titan-gold mr-2" /> 
                Lo que incluye:
              </h3>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-titan-dark p-1 rounded-full mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-titan-gold" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <p className="text-gray-400 text-sm italic">
                  "Únete hoy y se parte de la comunidad fitness más motivadora de Rengo."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};