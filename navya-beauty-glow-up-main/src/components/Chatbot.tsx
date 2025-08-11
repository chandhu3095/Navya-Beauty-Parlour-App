import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickOptions = [
  { label: "View Services", value: "services" },
  { label: "View Prices", value: "pricing" },
  { label: "Book Appointment", value: "booking" },
  { label: "Salon Timings", value: "timing" },
  { label: "Location", value: "location" },
];

const Chatbot = () => {
  const [showOptions, setShowOptions] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: 'Hello! Welcome to Navya Beauty Salon! ✨ How can I help you today?',
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Appointment details
    if (
      message.includes('book') ||
      message.includes('appointment') ||
      message === 'booking'
    ) {
      return `🗓️ Appointment Booking:\n\nYou can book your appointment by calling us at +91-9876543210 or using our online booking form.\n\nAvailable slots:\n- Morning: 9:00 AM – 12:00 PM\n- Afternoon: 12:30 PM – 4:00 PM\n- Evening: 4:30 PM – 8:00 PM\n\nWould you like to book a specific service or time slot?`;
    }

    // Pricing details
    if (
      message.includes('price') ||
      message.includes('pricing') ||
      message.includes('cost') ||
      message.includes('rate')
    ) {
      return `💰 Pricing Details:\n\n- Facial Treatments: ₹800 – ₹2500\n- Hair Cut & Style: ₹500 – ₹1200\n- Hair Color: ₹1500 – ₹3000\n- Makeup: ₹1500 – ₹8000\n- Bridal Packages: ₹15000 – ₹35000\n- Nail Art: ₹300 – ₹800\n\nLet me know if you want details for a specific service!`;
    }

    // Location details
    if (
      message.includes('location') ||
      message.includes('address') ||
      message === 'location'
    ) {
      return `📍 Our Location:\n\nNavya Beauty Saloon\n Hanuman Theatre Road,\nPamidi, 515774\n\nGoogle Maps: https://goo.gl/maps/yourlocation\n\nParking available. Call us for directions: +91-9000901201`;
    }

    // Services
    if (
      message.includes('service') ||
      message.includes('services')
    ) {
      return `✨ Our Services:\n\n- Facial Treatments\n- Hair Cut & Styling\n- Hair Color\n- Makeup & Bridal Makeup\n- Nail Art\n- Spa & Relaxation\n\nWould you like to know more about any service?`;
    }

    // Timings
    if (
      message.includes('timing') ||
      message.includes('hours') ||
      message.includes('open') ||
      message.includes('close')
    ) {
      return `⏰ Salon Timings:\n\nMonday – Sunday: 9:00 AM – 8:00 PM\nOpen all days!`;
    }

    // Greetings
    if (
      message.includes('hello') ||
      message.includes('hi') ||
      message.includes('hey')
    ) {
      return `Hello! Welcome to Navya Beauty Glow Up. How can I assist you today?`;
    }

    // Default fallback
    return `Thank you for reaching out! If you need details about services, pricing, booking, or our location, just click the options below or type your question.`;
  };

  const handleOptionClick = (optionValue: string) => {
    setInputText(optionValue);
    handleSendMessage(optionValue);
    setShowOptions(false);
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text ?? inputText;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setShowOptions(true); // Show options after bot replies
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full naturals-button text-white shadow-lg hover:scale-110 transition-all duration-300 border-0"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[95vw] max-w-sm h-[75vh] sm:h-96 animate-slide-up">
          <Card className="h-full flex flex-col naturals-card border border-gray-300 shadow-xl">
            <div className="flex items-center justify-between p-4 gradient-brown text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Navya Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                      message.sender === 'user'
                        ? 'naturals-button text-white'
                        : 'bg-white text-gray-800 border border-gray-300'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg border border-gray-300">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
              {/* Quick Options */}
              {showOptions && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionClick(option.value)}
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-yellow-200 text-gray-800 text-xs font-medium border border-gray-300 transition"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-300 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-600 text-sm"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  className="naturals-button text-white p-2 border-0"
                  disabled={!inputText.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;