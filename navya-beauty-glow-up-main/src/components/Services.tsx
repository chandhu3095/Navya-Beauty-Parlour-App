
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      category: "Hair Services",
      icon: "✂️",
      description: "Transform your look with our expert hair styling services",
      services: [
        { name: "Hair Cut & Styling", price: "₹800-₹1,500", duration: "60 min" },
        { name: "Hair Coloring", price: "₹2,500-₹4,000", duration: "120 min" },
        { name: "Hair Spa Treatment", price: "₹1,200-₹2,000", duration: "90 min" },
        { name: "Keratin Treatment", price: "₹5,000-₹8,000", duration: "180 min" },
        { name: "Hair Extensions", price: "₹3,000-₹6,000", duration: "120 min" },
      ]
    },
    {
      category: "Facial & Skin Care",
      icon: "✨",
      description: "Rejuvenate your skin with our premium facial treatments",
      services: [
        { name: "Classic Facial", price: "₹1,000-₹1,500", duration: "60 min" },
        { name: "Gold Facial", price: "₹2,500-₹3,500", duration: "90 min" },
        { name: "Diamond Facial", price: "₹3,000-₹4,500", duration: "90 min" },
        { name: "Anti-Aging Treatment", price: "₹3,500-₹5,000", duration: "120 min" },
        { name: "Acne Treatment", price: "₹1,500-₹2,500", duration: "75 min" },
      ]
    },
    {
      category: "Bridal Packages",
      icon: "👰",
      description: "Complete bridal makeover for your special day",
      services: [
        { name: "Bridal Makeup", price: "₹8,000-₹15,000", duration: "180 min" },
        { name: "Pre-Bridal Package", price: "₹12,000-₹20,000", duration: "Multiple sessions" },
        { name: "Mehendi Design", price: "₹2,000-₹5,000", duration: "120 min" },
        { name: "Bridal Hair Styling", price: "₹3,000-₹6,000", duration: "120 min" },
        { name: "Complete Bridal Package", price: "₹25,000-₹45,000", duration: "Full day" },
      ]
    },
    {
      category: "Nail Services",
      icon: "💅",
      description: "Beautiful nail art and care treatments",
      services: [
        { name: "Manicure", price: "₹500-₹800", duration: "45 min" },
        { name: "Pedicure", price: "₹600-₹1,000", duration: "60 min" },
        { name: "Gel Polish", price: "₹800-₹1,200", duration: "60 min" },
        { name: "Nail Art Design", price: "₹1,000-₹2,000", duration: "90 min" },
        { name: "Nail Extensions", price: "₹1,500-₹2,500", duration: "120 min" },
      ]
    },
    {
      category: "Body Treatments",
      icon: "🌸",
      description: "Relaxing body treatments and wellness services",
      services: [
        { name: "Full Body Massage", price: "₹2,000-₹3,500", duration: "90 min" },
        { name: "Body Polishing", price: "₹2,500-₹4,000", duration: "120 min" },
        { name: "Waxing (Full Body)", price: "₹1,500-₹2,500", duration: "120 min" },
        { name: "Threading", price: "₹100-₹300", duration: "15 min" },
        { name: "Body Wrap Treatment", price: "₹3,000-₹5,000", duration: "150 min" },
      ]
    },
    {
      category: "Makeup Services",
      icon: "💄",
      description: "Professional makeup for all occasions",
      services: [
        { name: "Party Makeup", price: "₹2,500-₹4,000", duration: "90 min" },
        { name: "Engagement Makeup", price: "₹4,000-₹6,500", duration: "120 min" },
        { name: "Photo Shoot Makeup", price: "₹3,500-₹5,500", duration: "120 min" },
        { name: "HD Makeup", price: "₹5,000-₹8,000", duration: "150 min" },
        { name: "Airbrush Makeup", price: "₹6,000-₹10,000", duration: "150 min" },
      ]
    }
  ];

  const handleBookService = (serviceName: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-warm-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Our Signature Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, 
            designed exclusively for women with premium quality and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serviceCategory, index) => (
            <Card
              key={serviceCategory.category}
              className="naturals-card hover-lift overflow-hidden border-elegant-brown-200 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{serviceCategory.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-elegant-brown-700 mb-2">
                    {serviceCategory.category}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {serviceCategory.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-3 mb-6">
                  {serviceCategory.services.map((service) => (
                    <div
                      key={service.name}
                      className="flex justify-between items-center p-3 bg-white rounded-lg border border-warm-beige-200 hover:border-elegant-brown-300 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-gray-800 text-sm">
                          {service.name}
                        </h4>
                        <p className="text-xs text-gray-500">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-elegant-brown-600 text-sm">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <Button
                  onClick={() => handleBookService(serviceCategory.category)}
                  className="w-full naturals-button text-white font-medium py-2 text-sm border-0"
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-16 text-center">
          <div className="naturals-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-elegant-brown-700 mb-4">
              Special Packages & Offers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gradient-to-r from-golden-100 to-golden-200 rounded-xl">
                <h4 className="font-bold text-elegant-brown-700">Monthly Beauty Package</h4>
                <p className="text-sm text-gray-600 mt-1">3 Services + 1 Free</p>
                <p className="font-bold text-elegant-brown-600 mt-2">Starting ₹5,999</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-elegant-brown-100 to-warm-beige-200 rounded-xl">
                <h4 className="font-bold text-elegant-brown-700">Bridal Special</h4>
                <p className="text-sm text-gray-600 mt-1">Complete Wedding Makeover</p>
                <p className="font-bold text-elegant-brown-600 mt-2">Starting ₹25,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
