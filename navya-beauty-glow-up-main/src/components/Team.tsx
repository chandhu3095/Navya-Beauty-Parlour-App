
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Subhalakshmi",
      role: "Master Stylist & Owner",
      specialties: ["Hair Cutting", "Color Expert", "Bridal Styling"],
      experience: "5+ Years",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face",
      bio: "Subhalakshmi founded Navya with a vision to create a safe space where women can express their beauty. She specializes in modern cuts and stunning color transformations."
    },
    {
      name: "Thulasi",
      role: "Makeup Artist",
      specialties: ["Bridal Makeup", "Editorial Looks", "Makeup Lessons"],
      experience: "2+ Years",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      bio: "Thulasi brings artistry to every face she touches. From natural everyday looks to glamorous transformations, she creates magic with makeup."
    },
    {
      name: "Navya",
      role: "Nail Technician",
      specialties: ["Nail Art", "Gel Extensions", "Hand Care"],
      experience: "2+ Years",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face",
      bio: "Navya is our nail art virtuoso, creating stunning designs that reflect each client's personality. Her attention to detail is unmatched."
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our passionate team of female professionals is dedicated to making you feel beautiful, 
            confident, and empowered. Each stylist brings years of expertise and a commitment to excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="hover-lift border-rose-gold-200 bg-white/90 backdrop-blur-sm group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6 overflow-hidden rounded-full mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-rose-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-gold-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {member.experience} Experience
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs bg-rose-gold-100 text-rose-gold-700 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-rose-gold-200">
            <h3 className="text-2xl font-heading font-bold mb-6 text-gray-800">
              Our Promise to You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">👩‍💼</div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Female Staff</h4>
                <p className="text-sm text-gray-600">Skilled professionals who understand women's needs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-semibold text-gray-800 mb-2">Personalized Care</h4>
                <p className="text-sm text-gray-600">Tailored treatments for your unique beauty</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💖</div>
                <h4 className="font-semibold text-gray-800 mb-2">Empowering Experience</h4>
                <p className="text-sm text-gray-600">Building confidence through beauty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
