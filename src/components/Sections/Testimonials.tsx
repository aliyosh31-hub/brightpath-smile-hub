import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      treatment: 'Cosmetic Dentistry',
      rating: 5,
      text: 'Dr. Smith and the entire team at BrightPath Dental transformed my smile beyond my expectations. The process was comfortable, and the results are absolutely amazing. I finally have the confidence to smile widely!',
      location: 'Downtown Patient'
    },
    {
      name: 'Michael Chen',
      treatment: 'Orthodontics',
      rating: 5,
      text: 'The clear aligner treatment was perfect for my lifestyle. The team was professional, the office is modern and clean, and I loved being able to track my progress. Highly recommend!',
      location: 'Westside Patient'
    },
    {
      name: 'Emily Rodriguez',
      treatment: 'Emergency Care',
      rating: 5,
      text: 'When I had a dental emergency on the weekend, they accommodated me immediately. The pain relief was instant, and they explained everything clearly. Truly grateful for their exceptional care.',
      location: 'Midtown Patient'
    },
    {
      name: 'David Thompson',
      treatment: 'Preventive Care',
      rating: 5,
      text: 'I\'ve been coming here for years, and the quality of care is consistently outstanding. The hygienists are gentle, thorough, and the dentists really care about your long-term oral health.',
      location: 'Regular Patient'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about 
            their experience at BrightPath Dental.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-dental-mint opacity-30" />
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-poppins font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm text-dental-blue font-medium">
                  {testimonials[currentTestimonial].treatment}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-dental-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-poppins font-bold text-dental-blue">500+</div>
            <div className="text-muted-foreground">5-Star Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-poppins font-bold text-dental-blue">98%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-poppins font-bold text-dental-blue">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;