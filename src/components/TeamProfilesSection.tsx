import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const TeamProfilesSection = () => {
  const teamMembers = [
    {
      name: "Jhonatan Anibal Julca García",
      role: "Líder de Proyecto e Ingeniería de Sistemas",
      specialization: "Inteligencia Artificial y Arquitectura de Software",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      description: "Especialista en machine learning y sistemas embebidos, lidera el desarrollo de la arquitectura de IA del Lazar IA.",
      skills: ["Machine Learning", "Computer Vision", "Python", "TensorFlow"],
      social: {
        linkedin: "#",
        email: "jhonatan.julca@chalecoInteligente.org",
        github: "#"
      }
    },
    // Placeholder para futuros miembros del equipo
    {
      name: "[Próximo miembro del equipo]",
      role: "Ingeniería Biomédica",
      specialization: "Biocompatibilidad y Ergonomía",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      description: "Experto en diseño de dispositivos médicos y interacción segura con el usuario.",
      skills: ["Biocompatibilidad", "Ergonomía", "Sensores Médicos", "Diseño de Producto"],
      social: {
        linkedin: "#",
        email: "#",
        github: "#"
      },
      placeholder: true
    },
    {
      name: "[Próximo miembro del equipo]",
      role: "Psicología Cognitiva",
      specialization: "UX y Accesibilidad",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      description: "Especialista en experiencia de usuario y diseño centrado en accesibilidad.",
      skills: ["UX Research", "Psicología Cognitiva", "Accesibilidad", "Diseño Inclusivo"],
      social: {
        linkedin: "#",
        email: "#",
        github: "#"
      },
      placeholder: true
    },
    {
      name: "[Próximo miembro del equipo]",
      role: "Medicina de Emergencias",
      specialization: "Monitoreo de Salud",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      description: "Médico especialista en protocolos de emergencia y monitoreo de signos vitales.",
      skills: ["Medicina de Emergencias", "Monitoreo Vital", "Protocolos Médicos", "Telemedicina"],
      social: {
        linkedin: "#",
        email: "#",
        github: "#"
      },
      placeholder: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas apasionadas que están transformando la tecnología asistiva
            y creando un futuro más inclusivo para todos.
          </p>
          <div className="w-24 h-1 bg-blue-800 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                member.placeholder ? 'opacity-75' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.placeholder ? "Próximo miembro del equipo" : member.name}
                  className="w-full h-64 object-cover"
                />
                {member.placeholder && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                      Próximamente
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-900 mb-2 ${
                  member.placeholder ? 'text-gray-500' : ''
                }`}>
                  {member.name}
                </h3>

                <div className="mb-3">
                  <p className="text-blue-800 font-semibold text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {!member.placeholder && (
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-200"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres unirte a nuestro equipo?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos siempre buscando profesionales apasionados que quieran contribuir
              a crear tecnología que transforme vidas. Si compartes nuestra visión,
              nos encantaría conocerte.
            </p>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-200">
              Únete al equipo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfilesSection;