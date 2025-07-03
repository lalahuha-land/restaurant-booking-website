import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Food Critic',
      content: 'Bella Vista delivers an exceptional dining experience that rivals the best restaurants in Italy. Every dish is a masterpiece.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Regular Customer',
      content: 'The attention to detail and warm hospitality make every visit special. This is our go-to place for celebrations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Travel Blogger',
      content: 'Authentic Italian flavors in an elegant setting. The osso buco is absolutely divine. A must-visit destination.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <>
      <div className="batik-divider"></div>
      <section id="reviews" className="py-16 md:py-20 bg-porcelain text-batik-blue font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              What Our Guests
              <span className="block font-bold text-highlight">Are Saying</span>
            </h2>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
              Read what food critics and guests have to say about their Bella Vista experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-highlight/20 hover:border-highlight/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <Quote className="h-8 w-8 md:h-10 md:w-10 text-highlight mb-4" />
                  <p className="text-base md:text-lg leading-relaxed text-accent">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-highlight fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-batik-blue text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-accent text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="text-center mt-12 md:mt-16 bg-primary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-highlight/20">
            <div className="flex justify-center items-center mb-4">
              <div className="flex text-highlight mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 md:h-8 md:w-8 fill-current" />
                ))}
              </div>
              <span className="text-3xl md:text-4xl font-bold text-batik-blue">4.9</span>
            </div>
            <p className="text-lg md:text-xl text-accent mb-2">Exceptional Rating</p>
            <p className="text-accent/70 text-sm md:text-base">Based on 2,847 reviews across all platforms</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;