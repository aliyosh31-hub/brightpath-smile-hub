import { Award, Users, Heart, Clock } from 'lucide-react';
import teamImage from '@/assets/dental-team.jpg';

const About = () => {
  const stats = [
    { icon: Users, number: '5,000+', label: 'Happy Patients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Heart, number: '98%', label: 'Patient Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Emergency Care' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Meet Our Experienced Team
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At BrightPath Dental, we combine cutting-edge technology with compassionate care 
                to deliver exceptional dental experiences. Our team of dedicated professionals 
                is committed to helping you achieve and maintain optimal oral health.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white p-6 rounded-lg shadow-dental-soft border-l-4 border-dental-blue">
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide comprehensive, patient-centered dental care in a warm and welcoming 
                environment, utilizing the latest techniques and technology to ensure every 
                patient leaves with a healthy, confident smile.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-dental-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-poppins font-bold text-dental-blue">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-poppins font-semibold text-foreground">
                Certifications & Memberships
              </h4>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="bg-muted px-3 py-1 rounded-full">American Dental Association</span>
                <span className="bg-muted px-3 py-1 rounded-full">State Dental Board</span>
                <span className="bg-muted px-3 py-1 rounded-full">Academy of General Dentistry</span>
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-dental-hover">
              <img
                src={teamImage}
                alt="BrightPath Dental team of professionals"
                className="w-full h-auto object-cover hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/10 to-transparent"></div>
            </div>

            {/* Floating achievement card */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-dental-card">
              <div className="text-center">
                <div className="w-8 h-8 bg-dental-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="text-lg font-poppins font-bold text-dental-blue">4.9★</div>
                <div className="text-xs text-muted-foreground">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Highlights */}
        <div className="mt-16">
          <h3 className="text-2xl font-poppins font-bold text-center text-foreground mb-8">
            Why Choose BrightPath Dental?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-dental-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Patient-Centered Care</h4>
              <p className="text-muted-foreground text-sm">
                We prioritize your comfort and create personalized treatment plans for optimal results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dental-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Advanced Technology</h4>
              <p className="text-muted-foreground text-sm">
                State-of-the-art equipment and modern techniques for precise, comfortable treatments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dental-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">Flexible Scheduling</h4>
              <p className="text-muted-foreground text-sm">
                Convenient appointment times including early morning and evening slots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;