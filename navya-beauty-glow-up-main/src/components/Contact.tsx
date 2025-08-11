
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message for general inquiries
    const message = `*General Inquiry - Navya Beauty Salon*

👤 *Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

💬 *Message:*
${formData.message}

Looking forward to your response! 🌸`;

    const ownerWhatsApp = '919876543210'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    alert('Your message has been sent via WhatsApp!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-warm-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to enhance your beauty? Contact us today to schedule your appointment 
            or ask any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="naturals-card shadow-lg animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-elegant-brown-700 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full naturals-button text-white font-semibold py-3 border-0"
                >
                  💬 Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Salon Info */}
            <Card className="naturals-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-elegant-brown-700 mb-6">
                  Visit Our Salon
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-elegant-brown-700">Address</h4>
                      <p className="text-gray-600">
                        Hanuman Theatre Road, Near S R Degree College<br />
                        Pamidi, Ananthapur 515773<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-elegant-brown-700">Phone</h4>
                      <p className="text-gray-600">+91 90009 01201</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">💬</div>
                    <div>
                      <h4 className="font-semibold text-elegant-brown-700">WhatsApp</h4>
                      <p className="text-gray-600">+91 90009 01201</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h4 className="font-semibold text-elegant-brown-700">Email</h4>
                      <p className="text-gray-600">range3095@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="naturals-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-elegant-brown-700 mb-6">
                  Opening Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-elegant-brown-600">Monday - Saturday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-elegant-brown-600">Sunday</span>
                    <span className="text-gray-600">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-4 p-3 bg-golden-100 rounded-lg">
                    <p className="text-sm text-elegant-brown-700">
                      💡 <strong>Tip:</strong> Book in advance for weekend appointments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="naturals-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-elegant-brown-700 mb-6">
                  Follow Us
                </h3>
                
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-elegant-brown-600 text-white rounded-full hover:bg-elegant-brown-700 transition-colors"
                  >
                    📘
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-elegant-brown-600 text-white rounded-full hover:bg-elegant-brown-700 transition-colors"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-elegant-brown-600 text-white rounded-full hover:bg-elegant-brown-700 transition-colors"
                  >
                    🐦
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-elegant-brown-600 text-white rounded-full hover:bg-elegant-brown-700 transition-colors"
                  >
                    📌
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
