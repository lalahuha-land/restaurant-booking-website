import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="batik-divider"></div>
      <section id="contact" className="py-16 md:py-20 bg-porcelain text-emerald font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-4">
              Visit Us at
              <span className="block font-bold text-accent">Bella Vista</span>
            </h2>
            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto">
              Located in the heart of the culinary district, we're ready to welcome you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-background rounded-2xl p-6 md:p-8 border border-highlight/20">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-highlight mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p className="text-primary/70 text-sm md:text-base">123 Gourmet Street<br />Culinary District, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-highlight mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p className="text-primary/70 text-sm md:text-base">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-highlight mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-primary/70 text-sm md:text-base">reservations@bellavista.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-highlight mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Hours</h4>
                      <div className="text-primary/70 text-sm md:text-base space-y-1">
                        <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                        <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                        <p>Sunday: 11:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-primary-orange/10 rounded-2xl p-6 md:p-8 border border-primary-orange/30">
                <h3 className="text-lg md:text-xl font-bold text-primary-dark mb-4">Getting Here</h3>
                <div className="flex items-start">
                  <Navigation className="h-4 w-4 md:h-5 md:w-5 text-primary-orange mt-1 mr-3 flex-shrink-0" />
                  <div className="text-primary-dark/80 text-sm md:text-base">
                    <p className="mb-2">Located in downtown's premier dining district, easily accessible by:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                      <li>Subway: 4, 5, 6 to Union Square (5 min walk)</li>
                      <li>Parking: Valet service available ($15)</li>
                      <li>Taxi/Uber: Direct drop-off at main entrance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-primary-yellow/20 rounded-2xl h-64 md:h-96 lg:h-full flex items-center justify-center border border-primary-orange/20">
                <div className="text-center">
                  <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary-orange mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold text-primary-dark mb-2">Interactive Map</h3>
                  <p className="text-primary-dark/70 mb-4 text-sm md:text-base">Map integration would be implemented here</p>
                  <button className="bg-gradient-to-r from-primary-orange to-primary-red text-primary-dark px-6 py-2 rounded-full hover:from-primary-red hover:to-primary-orange transition-all duration-300 text-sm md:text-base font-semibold">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Notice */}
          <div className="mt-12 md:mt-16 text-center bg-batik-blue text-white rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Dine with Us?</h3>
            <p className="text-lg md:text-xl mb-6">Reservations are recommended, especially for weekend dining.</p>
            <button className="bg-gradient-to-r from-primary-orange to-primary-yellow text-primary-dark px-8 py-3 rounded-full font-semibold hover:from-primary-yellow hover:to-primary-orange transition-all duration-300 text-sm md:text-base">
              Make a Reservation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;