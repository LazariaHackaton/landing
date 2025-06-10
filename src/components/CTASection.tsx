import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Heart, Users, Building } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const collaborationTypes = [
    { value: 'ong', label: 'ONG / Fundación', icon: Heart },
    { value: 'universidad', label: 'Universidad / Centro de Investigación', icon: Users },
    { value: 'gobierno', label: 'Entidad Pública / Gobierno', icon: Building },
    { value: 'empresa', label: 'Empresa / Sector Privado', icon: Building },
    { value: 'personal', label: 'Interés Personal / Profesional', icon: Users }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Colabora con esta iniciativa
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Únete a nosotros para llevar esta tecnología a quienes más la necesitan.
            Juntos podemos crear un mundo más accesible e inclusivo.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">¿Cómo puedes ayudar?</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organización
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  placeholder="Nombre de tu organización"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium mb-2">
                  Tipo de colaboración *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                >
                  <option value="" className="text-gray-800">Selecciona una opción</option>
                  {collaborationTypes.map((type) => (
                    <option key={type.value} value={type.value} className="text-gray-800">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 resize-none"
                  placeholder="Cuéntanos cómo te gustaría colaborar con esta iniciativa..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-800 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>

          {/* Contact Information & Types */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Formas de colaborar</h3>

              <div className="space-y-4">
                {collaborationTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200">
                      <IconComponent className="h-6 w-6 text-blue-200 flex-shrink-0" />
                      <span className="text-blue-100">{type.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contáctanos directamente</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-blue-200">colaboracion@chalecoInteligente.org</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-blue-200">+51 999999999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-blue-200">Huánuco, Perú</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-blue-100 text-sm leading-relaxed">
                  Estamos abiertos a colaboraciones de todo tipo: financiación, investigación,
                  distribución, pruebas piloto, y cualquier forma de apoyo que pueda acelerar
                  el impacto de esta tecnología.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;