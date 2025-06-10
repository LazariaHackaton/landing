import { Heart, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    project: [
      { name: 'Sobre el proyecto', href: '#sistema' },
      { name: 'Tecnología', href: '#tecnologia' },
      { name: 'Equipo', href: '#equipo' },
      { name: 'Documentación', href: '#' }
    ],
    legal: [
      { name: 'Privacidad', href: '#' },
      { name: 'Términos', href: '#' },
      { name: 'Código de Conducta', href: '#' },
      { name: 'Licencias', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:colaboracion@chalecoInteligente.org', label: 'Email' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Lazar IA</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Tecnología transdisciplinaria para crear un mundo más accesible e inclusivo.
              Desarrollado con amor por un equipo comprometido con la innovación social.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Proyecto</h3>
            <ul className="space-y-2">
              {links.project.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>




          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Lazar IA. Desarrollado con ❤️ para un mundo más accesible.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇵🇪 Hecho en Perú</span>
              <span>•</span>
              <span>Licencia Open Source</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Accesibilidad AAA
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;