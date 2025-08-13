import { Calendar, Star, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dental-office.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground leading-tight">
                Your Smile, 
                <span className="text-dental-blue"> Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Experience exceptional dental care with our modern techniques, personalized treatment plans, 
                and warm, patient-focused approach. Your comfort and health are our top priorities.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center text-dental-blue">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-medium">ADA Certified</span>
              </div>
              <div className="flex items-center text-dental-blue">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center text-dental-blue">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-medium">4.9/5 Patient Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-dental-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Visit
              </Button>
              <Button variant="outline" className="btn-dental-secondary text-lg px-8 py-4">
                View Services
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                <span className="font-bold">Dental Emergency?</span> Call us now: 
                <a href="tel:+1234567890" className="text-red-600 hover:text-red-700 ml-1 underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-dental-hover">
              <img
                src={heroImage}
                alt="Modern dental office with friendly dentist and patient"
                className="w-full h-auto object-cover hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/10 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-dental-card">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-dental-gradient rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-foreground">Same Day Appointments</p>
                  <p className="text-sm text-muted-foreground">Available Monday - Friday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;