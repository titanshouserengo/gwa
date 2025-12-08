import React, { useState, useEffect, useMemo } from 'react';
import { plans } from '../data';
import { Button } from './Button';
import { Check, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AllPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'asistido' | 'general'>('asistido');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Memoize grouped plans to prevent recalculation on every render
  const groupedPlans = useMemo(() => {
    const filteredPlans = plans.filter(p => p.category === activeTab);
    return {
        mensual: filteredPlans.filter(p => p.subCategory === 'mensual'),
        largoPlazo: filteredPlans.filter(p => p.subCategory === 'largo_plazo'),
        am: filteredPlans.filter(p => p.subCategory === 'am')
    };
  }, [activeTab]);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
        const element = document.getElementById('plans');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
            <button onClick={handleBack} className="flex items-center text-gray-400 hover:text-titan-gold transition mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
            </button>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase text-center mb-4">
            Todos los Planes
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Elige la modalidad que mejor se adapte a ti. Matrícula gratis en todos nuestros planes.
            </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900 p-1 rounded-full inline-flex border border-zinc-800">
            <button
              onClick={() => setActiveTab('asistido')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === 'asistido' 
                  ? 'bg-titan-gold text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Planes Asistidos
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === 'general' 
                  ? 'bg-titan-gold text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Planes Generales
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-zinc-900/50 border-l-4 border-titan-gold p-4 mb-12 rounded-r-sm max-w-4xl mx-auto">
          {activeTab === 'asistido' ? (
            <div>
              <h3 className="text-white font-bold uppercase mb-1 flex items-center">
                <Star className="w-4 h-4 text-titan-gold mr-2" /> 
                ¿Qué incluye el Plan Asistido?
              </h3>
              <p className="text-sm text-gray-400">
                Puedes venir todos los días, pero recibes asistencia los días contratados. 
                Incluye rutina, corrección de técnica y sugerencia de cargas. 
                (No personalizado, entrenador trabaja con varios alumnos). Asistencia Lun-Vie.
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-white font-bold uppercase mb-1 flex items-center">
                <Star className="w-4 h-4 text-gray-400 mr-2" />
                ¿Qué es el Plan General?
              </h3>
              <p className="text-sm text-gray-400">
                Entrenas por tu cuenta. El staff está disponible para dudas puntuales, pero no incluye diseño de rutina ni corrección técnica constante.
              </p>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-16">
          
          {/* Mensuales */}
          {groupedPlans.mensual.length > 0 && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 border-b border-zinc-800 pb-2">
                Planes Mensuales {activeTab === 'asistido' ? 'Asistidos' : 'Generales'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedPlans.mensual.map(plan => <PlanCard key={plan.id} plan={plan} />)}
              </div>
            </section>
          )}

          {/* Largo Plazo */}
          {groupedPlans.largoPlazo.length > 0 && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 border-b border-zinc-800 pb-2">
                Largo Plazo (Ahorra Dinero)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {groupedPlans.largoPlazo.map(plan => <PlanCard key={plan.id} plan={plan} isLongTerm />)}
              </div>
            </section>
          )}

          {/* AM */}
          {groupedPlans.am.length > 0 && (
            <section>
              <h2 className="text-2xl font-heading font-bold text-white uppercase mb-6 border-b border-zinc-800 pb-2">
                Planes AM (08:00 - 13:00)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {groupedPlans.am.map(plan => <PlanCard key={plan.id} plan={plan} />)}
              </div>
            </section>
          )}

        </div>

      </div>
    </div>
  );
};

// Helper Subcomponent - Wrapped in Memo for performance when switching tabs
const PlanCard: React.FC<{ plan: any, isLongTerm?: boolean }> = React.memo(({ plan, isLongTerm }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`relative flex flex-col p-6 rounded-sm bg-zinc-900 border ${plan.recommended ? 'border-titan-gold shadow-[0_0_15px_rgba(251,191,36,0.1)]' : 'border-zinc-800 hover:border-zinc-600'} transition-all duration-300`}>
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-titan-gold text-black text-xs font-bold px-2 py-1 uppercase rounded-bl-sm z-10">
          Popular
        </div>
      )}
      
      <div className="mb-4">
        <h3 className={`text-xl font-heading font-bold text-white uppercase mb-1 ${plan.recommended ? 'pr-10' : ''}`}>
          {plan.name}
        </h3>
        <div className="flex items-baseline">
          <span className={`font-bold text-titan-gold ${isLongTerm ? 'text-2xl' : 'text-3xl'}`}>{plan.price}</span>
          <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {plan.features.slice(0, 4).map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start text-gray-400 text-xs">
            <Check className="h-3 w-3 text-titan-gold mr-2 flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="outline" className="w-full text-xs py-2" onClick={() => navigate(`/plan/${plan.id}`)}>
        Ver Detalles
      </Button>
    </div>
  );
});

PlanCard.displayName = 'PlanCard';