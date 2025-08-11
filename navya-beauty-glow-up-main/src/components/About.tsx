
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            About Navya Parlour
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Women Through Beauty - Our Story, Mission, and Values
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/About.jpg"
                alt="Navya Beauty Salon"  
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-gold-400 rounded-full flex items-center justify-center text-white text-2xl">
              ✨
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-heading font-bold to-black text-gray-800">
              Our Mission: Empowering Women Through Beauty
            </h3>
            <p className="text-lg text-black-600 leading-relaxed">
              At Navya, we believe that beauty is not just about looking good—it's about feeling 
              confident, empowered, and authentically yourself. Founded with the vision of creating 
              a safe, nurturing space exclusively for women, we've become more than just a beauty parlor.
            </p>
            <p className="text-lg text-black-600 leading-relaxed">
              Our ladies-only environment ensures that every woman who walks through our doors 
              feels comfortable, respected, and celebrated. From our expert female stylists to 
              our carefully curated services, everything at Navya is designed with women in mind.
            </p>
            <div className="bg-rose-gold-50 p-6 rounded-xl border border-rose-gold-200">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-rose-gold-400 mr-2">💫</span>
                Our Promise
              </h4>
              <p className="text-gray-600">
                "Every woman deserves to feel beautiful, confident, and empowered. At Navya, 
                we're not just enhancing your beauty—we're celebrating the incredible woman you are."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-rose-gold-200 bg-white/80 backdrop-blur-sm hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">👩‍🤝‍👩</div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gray-800">
                Women-Only Space
              </h3>
              <p className="text-gray-600">
                A sanctuary where women can relax, be themselves, and feel completely comfortable 
                during their beauty journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-rose-gold-200 bg-white/80 backdrop-blur-sm hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gray-800">
                Expert Care
              </h3>
              <p className="text-gray-600">
                Our skilled female professionals bring years of experience and a passion 
                for helping women look and feel their absolute best.
              </p>
            </CardContent>
          </Card>

          <Card className="border-rose-gold-200 bg-white/80 backdrop-blur-sm hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gray-800">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We believe beauty is empowering. Our goal is to help every client leave feeling 
                more confident and radiant than when they arrived.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-rose-gold-200">
          <h3 className="text-3xl font-heading font-bold text-center mb-8 text-gray-800">
            Why Choose Navya?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ladies-Only Environment</h4>
                  <p className="text-gray-600 text-sm">Complete privacy and comfort for all our clients</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Female Staff</h4>
                  <p className="text-gray-600 text-sm">Skilled professionals who understand women's needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Premium Products</h4>
                  <p className="text-gray-600 text-sm">High-quality, safe products for the best results</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Hygienic Standards</h4>
                  <p className="text-gray-600 text-sm">Strict cleanliness and safety protocols</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Personalized Service</h4>
                  <p className="text-gray-600 text-sm">Tailored treatments for your unique beauty needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-rose-gold-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Affordable Luxury</h4>
                  <p className="text-gray-600 text-sm">Premium services at competitive prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
