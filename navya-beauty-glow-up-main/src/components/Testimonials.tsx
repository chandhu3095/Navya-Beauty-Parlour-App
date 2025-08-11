
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Riya Mehta",
      service: "Bridal Package",
      rating: 5,
      text: "Navya made my wedding day absolutely perfect! Subhalakshmi and her team understood exactly what I wanted. The ladies-only environment made me feel so comfortable and confident. Highly recommend!",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Sneha Kapoor",
      service: "Hair Color & Cut",
      rating: 5,
      text: "I was nervous about changing my hair color, but Subhalakshmi made me feel at ease. The result was beyond my expectations! The salon has such a warm, welcoming atmosphere.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Deepika Sharma",
      service: "Monthly Facial Package",
      rating: 5,
      text: "Subhalakshmi's facials have transformed my skin completely. I love that this is a women-only space where I can truly relax. The entire team is professional and caring.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Aarti Jain",
      service: "Nail Art & Manicure",
      rating: 5,
      text: "Navya creates the most beautiful nail art! I always leave feeling pampered and confident. The attention to detail and creativity is amazing.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Pooja Singh",
      service: "Makeup Lessons",
      rating: 5,
      text: "Thulasi taught me techniques I never knew! The makeup lesson was so informative and fun. I finally feel confident doing my own makeup for special occasions.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the amazing women who have experienced the Navya difference. 
            Their stories inspire us to keep raising the bar for excellence.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-rose-gold-200 min-h-[300px]">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-rose-gold-400">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-rose-gold-200"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-rose-gold-600 text-sm">
                      {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-rose-gold-200 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-rose-gold-200 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-rose-gold-400 scale-125'
                    : 'bg-rose-gold-200 hover:bg-rose-gold-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rose-gold-200">
            <div className="text-3xl font-bold text-rose-gold-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rose-gold-200">
            <div className="text-3xl font-bold text-rose-gold-600 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-rose-gold-200">
            <div className="text-3xl font-bold text-rose-gold-600 mb-2">3+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
