import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from './Button';

type FormData = {
  name: string;
  phone: string;
  goal: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Construct WhatsApp message
    const text = `Hola Titans House, mi nombre es ${data.name}. Mi objetivo es ${data.goal} y me gustaría más información. Mi teléfono es ${data.phone}.`;
    window.open(`https://wa.me/56962169412?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Using the Business Name in the query ensures the pin is on the correct business location
  const mapUrl = "https://www.google.com/maps?q=Gym+Titans+House+Rengo&output=embed";

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-white uppercase mb-8">
              ¿Listo para empezar? <span className="text-titan-gold">Contáctanos</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ven a conocer nuestras instalaciones. La primera visita corre por nuestra cuenta. Estacionamiento privado disponible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-titan-dark p-3 rounded-sm mr-4 text-titan-gold border border-zinc-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Dirección</h4>
                  <p className="text-gray-400">Rinconada de Malambo 1670-B</p>
                  <p className="text-gray-500 text-sm">Rengo, O'Higgins, Chile</p>
                  <a href="https://maps.app.goo.gl/HTWBhcawZDuG7ZG49" target="_blank" rel="noreferrer" className="text-titan-gold text-sm underline mt-1 block hover:text-white">Ver en Google Maps</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-titan-dark p-3 rounded-sm mr-4 text-titan-gold border border-zinc-800">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Horarios</h4>
                  <div className="text-gray-400 space-y-1">
                    <p className="flex justify-between w-48"><span>Lun - Vie:</span> <span className="text-white">08:00 - 23:00</span></p>
                    <p className="flex justify-between w-48"><span>Sábado:</span> <span className="text-white">09:00 - 14:00</span></p>
                    <p className="flex justify-between w-48"><span>Domingo:</span> <span className="text-white">10:00 - 14:00</span></p>
                    <p className="flex justify-between w-48"><span>Festivos:</span> <span className="text-white">09:00 - 14:00</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-titan-dark p-3 rounded-sm mr-4 text-titan-gold border border-zinc-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Contacto</h4>
                  <p className="text-gray-400">+56 9 6216 9412</p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/titans_house_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-titan-gold transition">
                      <Instagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-8 rounded-sm shadow-2xl border-t-4 border-titan-red">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Solicita Información</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                <input 
                  {...register("name", { required: true })}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                  placeholder="Tu nombre de guerrero"
                />
                {errors.name && <span className="text-titan-red text-xs">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
                <input 
                  {...register("phone", { required: true })}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                  placeholder="+56 9 ..."
                />
                {errors.phone && <span className="text-titan-red text-xs">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Objetivo Principal</label>
                <select 
                  {...register("goal")}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                >
                  <option value="Perder Peso">Perder Peso</option>
                  <option value="Ganar Músculo">Ganar Músculo</option>
                  <option value="Mejorar Salud">Mejorar Salud</option>
                  <option value="Competición">Competición</option>
                </select>
              </div>

              <Button type="submit" fullWidth>
                Contactar por WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Te responderemos lo antes posible para coordinar tu visita.
              </p>
            </form>
          </div>

        </div>

        {/* Map Embed */}
        <div className="mt-16 w-full h-80 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
           <iframe 
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Gym Titans House"
           ></iframe>
        </div>

      </div>
    </section>
  );
};