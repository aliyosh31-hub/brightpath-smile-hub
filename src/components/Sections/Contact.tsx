import { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon to confirm your appointment.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@brightpathdental.com',
      link: 'mailto:info@brightpathdental.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Main Street, Downtown, ST 12345',
      link: 'https://maps.google.com'
    }
  ];

  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', time: 'Emergency Only' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step in your dental health journey? Contact us today to 
            schedule your consultation or ask any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-dental-card">
              <CardHeader>
                <CardTitle className="flex items-center text-dental-blue">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Needed
                      </label>
                      <Select>
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="cleaning">Routine Cleaning</SelectItem>
                          <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                          <SelectItem value="orthodontics">Orthodontics</SelectItem>
                          <SelectItem value="emergency">Emergency Care</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input min-h-[100px]"
                      placeholder="Tell us about any specific concerns or questions..."
                    />
                  </div>

                  <Button type="submit" className="btn-dental-primary w-full text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Request Appointment
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll contact you within 24 hours to confirm your appointment details.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-dental-card">
              <CardHeader>
                <CardTitle className="text-dental-blue">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <div className="w-10 h-10 bg-dental-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground group-hover:text-dental-blue transition-colors">
                        {info.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {info.details}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-dental-card">
              <CardHeader>
                <CardTitle className="flex items-center text-dental-blue">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="shadow-dental-card border-red-200 bg-red-50">
              <CardContent className="p-4">
                <h3 className="font-poppins font-semibold text-red-800 mb-2">
                  Dental Emergency?
                </h3>
                <p className="text-red-700 text-sm mb-3">
                  If you're experiencing severe pain or have a dental emergency, 
                  call us immediately for same-day treatment.
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Line: (123) 456-7890
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-dental-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">
                    123 Main Street, Downtown, ST 12345
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;