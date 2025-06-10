import React from 'react';
import { Code, Brain, Heart, Stethoscope } from 'lucide-react';

const TeamSection = () => {
  const teams = [
    {
      icon: Code,
      title: "Ingeniería de Sistemas",
      role: "IA y arquitectura",
      description: "Especialistas en inteligencia artificial, arquitectura de software y sistemas embebidos que diseñan el cerebro tecnológico del chaleco.",
      color: "blue",
      skills: ["Machine Learning", "Computer Vision", "Embedded Systems", "Software Architecture"]
    },
    {
      icon: Heart,
      title: "Ingeniería Biomédica",
      role: "Interacción segura y fisiológica",
      description: "Expertos en biocompatibilidad, ergonomía y seguridad fisiológica que garantizan una interacción natural y segura con el usuario.",
      color: "red",
      skills: ["Biocompatibilidad", "Ergonomía", "Sensores Médicos", "Seguridad Fisiológica"]
    },
    {
      icon: Brain,
      title: "Psicología",
      role: "Experiencia del usuario y accesibilidad emocional",
      description: "Profesionales en psicología cognitiva y accesibilidad que optimizan la experiencia de usuario y el bienestar emocional.",
      color: "purple",
      skills: ["UX Psychology", "Cognitive Load", "Accessibility", "Behavioral Design"]
    },
    {
      icon: Stethoscope,
      title: "Medicina",
      role: "Monitoreo de salud y situaciones de riesgo",
      description: "Médicos especialistas que definen protocolos de monitoreo de salud y respuesta a emergencias médicas.",
      color: "green",
      skills: ["Emergency Medicine", "Health Monitoring", "Risk Assessment", "Medical Protocols"]
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Quiénes están detrás?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo transdisciplinario de expertos unidos por la misión de crear 
            tecnología verdaderamente inclusiva y transformadora.
          </p>
          <div className="w-24 h-1 bg-blue-800 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teams.map((team, index) => {
            const IconComponent = team.icon;
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-800",
              red: "from-red-500 to-red-600 bg-red-50 text-red-800",
              purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-800",
              green: "from-green-500 to-green-600 bg-green-50 text-green-800"
            };

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[team.color].split(' ')[0]} ${colorClasses[team.color].split(' ')[1]} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{team.title}</h3>
                    <p className={`text-sm font-semibold ${colorClasses[team.color].split(' ')[2]} ${colorClasses[team.color].split(' ')[3]}`}>
                      {team.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {team.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Especialidades clave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {team.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 ${colorClasses[team.color].split(' ')[2]} text-xs font-medium rounded-full`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Enfoque Transdisciplinario
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            La innovación real surge cuando diferentes disciplinas convergen con un propósito común. 
            Nuestro equipo integra conocimientos técnicos, médicos, psicológicos y de diseño para 
            crear soluciones que realmente impacten vidas.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-sm text-gray-600">Profesionales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Disciplinas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-sm text-gray-600">Años de desarrollo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;