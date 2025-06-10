import React from 'react';
import { Cpu, Camera, Wifi, Zap, Code, Database } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Cpu,
      name: "Raspberry Pi 4B",
      specs: "4GB/8GB RAM",
      description: "Corazón del sistema con procesamiento ARM de alto rendimiento"
    },
    {
      icon: Camera,
      name: "Sensor OV5640",
      specs: "5MP, 1080p",
      description: "Cámara de alta definición para visión artificial en tiempo real"
    },
    {
      icon: Zap,
      name: "Sensores Ultrasónicos",
      specs: "HC-SR04",
      description: "Detección de proximidad con precisión milimétrica"
    },
    {
      icon: Wifi,
      name: "Conectividad",
      specs: "WiFi + Bluetooth",
      description: "Comunicación dual para emergencias y actualizaciones"
    },
    {
      icon: Code,
      name: "IA Local",
      specs: "TensorFlow Lite + OpenCV",
      description: "Procesamiento de imágenes sin dependencias externas"
    },
    {
      icon: Database,
      name: "Software Base",
      specs: "Python + Linux",
      description: "Sistema operativo optimizado para aplicaciones críticas"
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tecnología que lo hace posible
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Componentes de alta calidad trabajando en perfecta sincronía para crear 
            una experiencia confiable y efectiva.
          </p>
          <div className="w-24 h-1 bg-blue-800 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-blue-800 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{tech.specs}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Arquitectura del Sistema</h3>
              <p className="text-blue-100 mb-6">
                Nuestro sistema integra hardware especializado con software inteligente, 
                creando una plataforma robusta y escalable que garantiza operación 
                continua y confiable.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Procesamiento local sin latencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Algoritmos de IA optimizados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Comunicación segura y encriptada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Actualizaciones automáticas OTA</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">CPU Usage</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-sm">75%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">Memory</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-sm">50%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm">AI Processing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-sm">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;