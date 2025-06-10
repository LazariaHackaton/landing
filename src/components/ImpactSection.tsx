import React from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: "285M",
      label: "Personas con discapacidad visual",
      description: "en el mundo necesitan tecnología asistiva"
    },
    {
      icon: TrendingUp,
      value: "75%",
      label: "Reducción de accidentes",
      description: "estimada con nuestro sistema"
    },
    {
      icon: Target,
      value: "24/7",
      label: "Asistencia continua",
      description: "sin dependencia de conexión a internet"
    },
    {
      icon: Award,
      value: "100%",
      label: "Privacidad garantizada",
      description: "con procesamiento local de datos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Impacto Social
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Este chaleco reduce accidentes, fortalece la autonomía y mejora la calidad 
            de vida de miles de personas con discapacidad visual.
          </p>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <IconComponent className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-blue-100">{stat.label}</div>
                <p className="text-sm text-blue-200">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold mb-6 italic">
            "Donde otros ven una limitación, nosotros diseñamos libertad."
          </blockquote>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto">
            Nuestro enfoque transdisciplinario combina la excelencia técnica con una 
            comprensión profunda de las necesidades humanas, creando soluciones que 
            no solo funcionan, sino que transforman vidas.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Alcance Global</h3>
            <p className="text-blue-100">Diseñado para funcionar en cualquier cultura y entorno</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Colaboración</h3>
            <p className="text-blue-100">Desarrollado con la comunidad, para la comunidad</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovación</h3>
            <p className="text-blue-100">Tecnología de vanguardia accesible para todos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;