import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Preventive Care',
      description: 'Regular cleanings, exams, and preventive treatments to keep your smile healthy and bright.',
      features: ['Routine Cleanings', 'Oral Exams', 'Fluoride Treatments', 'Sealants'],
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures and personalized treatment plans.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers'],
      icon: '✨'
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or modern clear aligner treatments.',
      features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Adult Orthodontics'],
      icon: '🦾'
    },
    {
      title: 'Emergency Dentistry',
      description: 'Immediate care for dental emergencies. We provide same-day appointments for urgent needs.',
      features: ['Tooth Pain Relief', 'Broken Tooth Repair', 'Lost Fillings', '24/7 Emergency Line'],
      icon: '🚨'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we offer a full range of dental services 
            to meet all your oral health needs in one convenient location.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 mr-2 text-dental-mint" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full btn-dental-primary group-hover:shadow-dental-hover">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insurance Notice */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
              Insurance & Financing Options
            </h3>
            <p className="text-muted-foreground mb-4">
              We accept most major insurance plans and offer flexible financing options to make dental care affordable.
            </p>
            <Button variant="outline" className="btn-dental-secondary">
              View Accepted Insurance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;