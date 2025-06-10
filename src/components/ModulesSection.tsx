import React from 'react';
import { 
  Eye, 
  Brain, 
  Vibrate, 
  Mic, 
  Heart, 
  Shield, 
  Globe 
} from 'lucide-react';

const ModulesSection = () => {
  const modules = [
    {
      icon: Eye,
      title: "Detección de obstáculos",
      description: "Identificación en tiempo real de objetos, personas y cambios en el terreno mediante visión artificial avanzada.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "IA adaptativa",
      description: "Sistema de aprendizaje que se personaliza según el entorno, rutinas y preferencias del usuario.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Vibrate,
      title: "Retroalimentación sensorial",
      description: "Patrones hápticos no invasivos que comunican información espacial de forma intuitiva y discreta.",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Mic,
      title: "Control por voz",
      description: "Interfaz de comandos de voz personalizable con soporte multilingüe y adaptación cultural.",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Monitoreo médico",
      description: "Seguimiento de signos vitales y detección de situaciones de estrés o emergencias médicas.",
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Seguridad de datos",
      description: "Procesamiento local que garantiza la privacidad, con comunicación de emergencia automática.",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Accesibilidad universal",
      description: "Soporte multilingüe y adaptación cultural para usuarios de diferentes contextos y necesidades.",
      color: "teal",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Módulos del Sistema
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada módulo ha sido diseñado con precisión para crear una experiencia integral 
            que combina seguridad, autonomía y comodidad.
          </p>
          <div className="w-24 h-1 bg-blue-800 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${module.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Estado</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-medium">Activo</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-blue-800">7 módulos integrados</strong> trabajando en perfecta sincronía
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse animation-delay-400"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-600"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse animation-delay-800"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse animation-delay-1200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;