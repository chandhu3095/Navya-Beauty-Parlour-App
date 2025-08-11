import { Button } from '@/components/ui/button';


const Hero = () => {
  const handleBookNow = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-beige-50 to-white">
      {/* Background Image */}
     <div className="absolute inset-0 z-0"> 
        <img
          src="backgroun.jpg"
          alt="Professional Indian beauty salon treatment"
          className="w-full h-full object-cover opacity-90"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-warm-beige-100/90"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Ladies Only Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-elegant-brown-100 border border-elegant-brown-200 mb-8 shadow-sm">
            <span className="text-sm font-medium text-elegant-brown-700">✨ Exclusively for Women - Premium Beauty Care</span>
          </div>

          {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-extrabold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 drop-shadow-lg">
        Welcome to <span className="gradient-text font-playfair">Navya</span>
      <br />
      <span className="text-3xl md:text-5xl lg:text-6xl font-inter text-rose-700 drop-shadow-md">Your Signature Beauty Destination</span>
      </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Experience the finest in beauty care at India's premier ladies-only salon. 
            Where tradition meets modern luxury, and every woman discovers her radiant best.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={handleBookNow}
              className="naturals-button text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg border-0"
            >
              Book Your Appointment
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-elegant-brown-600 text-elegant-brown-700 hover:bg-elegant-brown-50 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 naturals-card rounded-xl">
              <div className="text-3xl">⭐</div>
              <span className="font-semibold text-elegant-brown-700">5-Star Rated</span>
              <span className="text-sm text-gray-600">Premium Quality Service</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 naturals-card rounded-xl">
              <div className="text-3xl">👩‍💼</div>
              <span className="font-semibold text-elegant-brown-700">Expert Stylists</span>
              <span className="text-sm text-gray-600">Certified Professionals</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 naturals-card rounded-xl">
              <div className="text-3xl">🛡️</div>
              <span className="font-semibold text-elegant-brown-700">Safe & Hygienic</span>
              <span className="text-sm text-gray-600">International Standards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-elegant-brown-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-elegant-brown-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  