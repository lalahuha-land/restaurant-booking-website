import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald text-gold font-heading shadow-2xl sticky top-0 z-50 border-b border-gold/20">
      {/* Top info bar - hidden on mobile */}
      <div className="bg-primary border-b border-accent hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-accent">
                <Phone className="h-4 w-4 mr-2 text-highlight" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-accent">
                <Clock className="h-4 w-4 mr-2 text-highlight" />
                <span>Open Daily 11AM - 10PM</span>
              </div>
            </div>
            <div className="flex items-center text-accent">
              <MapPin className="h-4 w-4 mr-2 text-highlight" />
              <span>123 Gourmet Street, Culinary District</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-highlight">Bella Vista</h1>
            <span className="ml-3 text-sm text-accent font-light hidden sm:block">Fine Dining</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-accent hover:text-highlight transition-colors font-medium">Home</a>
            <a href="#menu" className="text-accent hover:text-highlight transition-colors font-medium">Menu</a>
            <a href="#gallery" className="text-accent hover:text-highlight transition-colors font-medium">Gallery</a>
            <a href="#reviews" className="text-accent hover:text-highlight transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-accent hover:text-highlight transition-colors font-medium">Contact</a>
            <button className="bg-gradient-to-r from-highlight to-accent text-primary px-6 py-3 rounded-full hover:from-accent hover:to-highlight transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-accent" />
            ) : (
              <Menu className="h-6 w-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-accent py-4 bg-primary">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-accent hover:text-highlight transition-colors font-medium py-2">Home</a>
              <a href="#menu" className="text-accent hover:text-highlight transition-colors font-medium py-2">Menu</a>
              <a href="#gallery" className="text-accent hover:text-highlight transition-colors font-medium py-2">Gallery</a>
              <a href="#reviews" className="text-accent hover:text-highlight transition-colors font-medium py-2">Reviews</a>
              <a href="#contact" className="text-accent hover:text-highlight transition-colors font-medium py-2">Contact</a>
              <button className="bg-gradient-to-r from-highlight to-accent text-primary px-6 py-3 rounded-full hover:from-accent hover:to-highlight transition-colors font-semibold self-start mt-4">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="batik-divider"></div>
    </header>
  );
};

export default Header;
