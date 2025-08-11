
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-rose-50 to-white/90 backdrop-blur-xl shadow-2xl shadow-rose-gold-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
        <div className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-white/90 border border-rose-gold-200 shadow-lg backdrop-blur-md">
  {/* Elegant AI-inspired icon */}
  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-rose-200 via-rose-gold-300 to-white shadow">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" fill="url(#grad)" />
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#E5B7A0" />
        </radialGradient>
      </defs>
    </svg>
  </span>
  <h1 className="text-3xl font-heading font-extrabold bg-gradient-to-r from-fuchsia-500 via-rose-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
    Navya
  </h1>
  <span className="ml-2 text-base font-semibold bg-gradient-to-r from-amber-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-md animate-fade-in">
    Ladies Only
  </span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground hover:text-rose-gold-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('#contact')}
              className="bg-rose-gold-300 hover:bg-rose-gold-400 text-foreground font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              )}></span>
              <span className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              )}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-foreground hover:text-rose-gold-400 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick('#contact')}
              className="bg-rose-gold-300 hover:bg-rose-gold-400 text-foreground font-medium px-6 py-2 rounded-full transition-all duration-300 w-fit"
            >
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
