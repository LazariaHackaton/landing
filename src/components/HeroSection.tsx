import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Tecnología que</span>
              <span className="block text-blue-800">guía.</span>
              <span className="block">Confianza que</span>
              <span className="block text-indigo-600">transforma.</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Un chaleco inteligente que detecta, alerta y aprende contigo.
              Diseñado para brindar autonomía, seguridad y confianza a personas con discapacidad visual.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Explora cómo funciona</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-800 hover:text-blue-800 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Ver demostración</span>
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">100%</div>
                <div>Tecnología Local</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div>Asistencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">∞</div>
                <div>Adaptabilidad</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              {/* Chaleco illustration */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl">
                {/* Sensors */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute top-20 left-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="absolute top-20 right-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-3000"></div>

                {/* Camera */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Raspberry Pi representation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-green-600 rounded border-2 border-green-400">
                  <div className="grid grid-cols-4 gap-1 p-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce">
              <div className="text-2xl">🤖</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg animate-bounce animation-delay-1000">
              <div className="text-2xl">👁️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;