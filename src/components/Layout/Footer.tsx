import { Phone, Mail, MapPin, Calendar, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Patient Info', href: '#patient-info' },
    { name: 'Contact', href: '#contact' },
    { name: 'Emergency Care', href: '#emergency' }
  ];

  const services = [
    { name: 'Preventive Care', href: '#services' },
    { name: 'Cosmetic Dentistry', href: '#services' },
    { name: 'Orthodontics', href: '#services' },
    { name: 'Emergency Dentistry', href: '#services' },
    { name: 'Teeth Whitening', href: '#services' }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-dental-gradient rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold">BrightPath Dental</h3>
                <p className="text-sm text-gray-300">Your Smile, Our Priority</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing exceptional dental care with modern techniques and personalized 
              treatment plans. Your comfort and health are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-dental-mint transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dental-mint transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-dental-mint transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-dental-mint transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-dental-mint transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-dental-mint flex-shrink-0" />
                <div>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-dental-mint transition-colors text-sm">
                    (123) 456-7890
                  </a>
                  <p className="text-xs text-gray-400">Main Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-dental-mint flex-shrink-0" />
                <div>
                  <a href="mailto:info@brightpathdental.com" className="text-gray-300 hover:text-dental-mint transition-colors text-sm">
                    info@brightpathdental.com
                  </a>
                  <p className="text-xs text-gray-400">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-dental-mint flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Main Street<br />
                    Downtown, ST 12345
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-dental-primary mt-4 w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>

        {/* Office Hours */}
        <div className="border-t border-gray-700 py-6">
          <div className="text-center md:text-left md:flex md:justify-between md:items-center">
            <div>
              <h4 className="font-poppins font-semibold mb-2 md:mb-0">Office Hours</h4>
              <p className="text-sm text-gray-300">
                Mon-Fri: 8:00 AM - 6:00 PM • Sat: 9:00 AM - 3:00 PM • Sun: Emergency Only
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-dental-mint font-medium">
                Emergency Line: (123) 456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 BrightPath Dental. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-dental-mint transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-dental-mint transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-dental-mint transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;