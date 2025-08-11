
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="gradient-text bg-gradient-to-r from-rose-gold-300 to-rose-gold-400 bg-clip-text text-transparent">
                Navya
              </span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your ladies-only beauty haven where empowerment meets elegance. 
              We're dedicated to helping women feel confident, beautiful, and radiant.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-rose-gold-300 hover:text-rose-gold-200 transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="text-rose-gold-300 hover:text-rose-gold-200 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="text-rose-gold-300 hover:text-rose-gold-200 transition-colors duration-300"
                aria-label="Pinterest"
              >
                <span className="text-xl">📌</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-gold-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Team', href: '#team' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-rose-gold-300 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rose-gold-300">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span className="text-sm">
                 Hanuman Theatre Road, Near S R Degree College<br />
                Pamidi, Ananthapur 515773, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span className="text-sm">+91 9000901201</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span className="text-sm">range3095@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕒</span>
                <span className="text-sm">Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Navya Beauty Parlor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-rose-gold-300 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-gold-300 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-gold-300 text-sm transition-colors duration-300">
                Booking Policy
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              ✨ Exclusively for women, by women ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
