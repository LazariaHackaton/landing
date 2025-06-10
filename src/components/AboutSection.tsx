import React from 'react';
import { Brain, Shield, Users, Cpu } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sistema" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es el Lazar IA?
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Es una prenda equipada con <strong className="text-blue-800">sensores de proximidad</strong>,
              una <strong className="text-indigo-600">cámara de visión artificial</strong> y
              <strong className="text-purple-600"> módulos hápticos</strong>. Utiliza IA para detectar obstáculos, guiar al usuario, y responder a emergencias.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              El sistema combina tecnología de punta con diseño centrado en el usuario,
              creando una experiencia de navegación natural e intuitiva que se adapta
              a las necesidades específicas de cada persona.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-800">
              <p className="text-gray-700 italic">
                "Fue creado por estudiantes de <strong>ingeniería</strong>,
                <strong> psicología</strong>, <strong>medicina</strong> y <strong>biomédica</strong>,
                en un esfuerzo transdisciplinario para crear tecnología verdaderamente inclusiva."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Brain className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">IA Adaptativa</h3>
              <p className="text-sm text-gray-600">Aprende y se adapta a tu entorno y rutinas</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Protección Total</h3>
              <p className="text-sm text-gray-600">Detección temprana de riesgos y obstáculos</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Colaborativo</h3>
              <p className="text-sm text-gray-600">Desarrollado con y para la comunidad</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <Cpu className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Procesamiento Local</h3>
              <p className="text-sm text-gray-600">Privacidad y respuesta instantánea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;