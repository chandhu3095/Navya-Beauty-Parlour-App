
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Hair Cut & Styling (₹800-₹1,500)',
    'Hair Coloring (₹2,500-₹4,000)',
    'Facial Treatment (₹1,000-₹1,500)',
    'Bridal Makeup (₹8,000-₹15,000)',
    'Manicure & Pedicure (₹500-₹1,000)',
    'Full Body Massage (₹2,000-₹3,500)',
    'Other (Please specify in notes)'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create WhatsApp message
    const message = `*New Appointment Booking - Navya Beauty Salon*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

💄 *Service Details:*
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}

📝 *Additional Notes:*
${formData.notes || 'None'}

Please confirm this appointment. 🌸`;

    // Owner's WhatsApp number (replace with actual number)
    const ownerWhatsApp = '91 9876543210'; // Replace with actual WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    
    alert('Your booking request has been sent via WhatsApp! You will receive a confirmation shortly.');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white  to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your beauty session with us. Fill out the form below and we'll confirm your appointment via WhatsApp.
          </p>
        </div>

        <Card className="naturals-card shadow-lg animate-scale-in">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-elegant-brown-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-elegant-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500 focus:border-transparent resize-none"
                  placeholder="Any special requests or notes..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-red-gold-600 hover:bg-red-gold-700 text-black font-semibold px-12 py-4 rounded-full text-lg shadow-lg border-0"
                >
                  📱 Send Booking Request via WhatsApp
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                  Your booking request will be sent via WhatsApp for instant confirmation
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="naturals-card p-6 rounded-xl">
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold text-elegant-brown-700">Call Us</h4>
              <p className="text-gray-600">+91 9000901201</p>
            </div>
            <div className="naturals-card p-6 rounded-xl">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-semibold text-elegant-brown-700">WhatsApp</h4>
              <p className="text-gray-600">+91 9000901201</p>
            </div>
            <div className="naturals-card p-6 rounded-xl">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold text-elegant-brown-700">Timings</h4>
              <p className="text-gray-600">9 AM - 7 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
