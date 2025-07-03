import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-batik-blue text-gold font-body">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Elegant restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center mb-6">
            <div className="flex text-highlight">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-sm md:text-base font-light text-accent">Michelin Recommended</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            An Extraordinary
            <span className="block font-bold text-highlight mt-2">Culinary Journey</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 text-accent leading-relaxed max-w-3xl">
            Experience the finest Italian cuisine crafted with passion, served in an atmosphere of timeless elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-gradient-to-r from-highlight to-accent hover:from-accent hover:to-highlight text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Reserve Your Table
            </button>
            <button className="border-2 border-highlight text-highlight hover:bg-highlight hover:text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-accent">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-highlight" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-highlight">25+</div>
              <div className="text-xs md:text-sm text-accent">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-highlight" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-highlight">50K+</div>
              <div className="text-xs md:text-sm text-accent">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-6 w-6 md:h-8 md:w-8 text-highlight fill-current" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-highlight">4.9</div>
              <div className="text-xs md:text-sm text-accent">Rating</div>
            </div>
          </div>
        </div>
      </div>
      <div className="batik-divider"></div>
    </section>
  );
};

export default Hero;