import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="batik-divider"></div>
      <footer className="bg-emerald text-gold font-body border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-highlight">Bella Vista</h3>
              <p className="text-highlight mb-6 leading-relaxed text-sm md:text-base">
                Experience the finest Italian cuisine in an atmosphere of timeless elegance. 
                Our commitment to authentic flavors and exceptional service has made us a 
                beloved destination for discerning diners.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-highlight/70 hover:text-highlight transition-colors">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="#" className="text-highlight/70 hover:text-highlight transition-colors">
                  <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a href="#" className="text-highlight/70 hover:text-highlight transition-colors">
                  <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-highlight">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="#home" className="text-highlight hover:text-background transition-colors">Home</a></li>
                <li><a href="#menu" className="text-highlight hover:text-background transition-colors">Menu</a></li>
                <li><a href="#gallery" className="text-highlight hover:text-background transition-colors">Gallery</a></li>
                <li><a href="#reviews" className="text-highlight hover:text-background transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-highlight hover:text-background transition-colors">Contact</a></li>
                <li><a href="#" className="text-highlight hover:text-background transition-colors">Private Events</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-highlight">Contact</h4>
              <div className="space-y-3 text-sm md:text-base">
                <div className="flex items-start text-highlight">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>12 Jalan Bukit Bintang<br />55100 Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-center text-highlight">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" />
                  <span>+60 3-2141 9999</span>
                </div>
                <div className="flex items-center text-highlight">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mr-3 flex-shrink-0" />
                  <span>reservations@bellavista.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-accent/40 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-highlight/70 text-sm mb-4 md:mb-0">
              © 2025 Bella Vista Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-highlight/70 hover:text-background text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-highlight/70 hover:text-background text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-highlight/70 hover:text-background text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;