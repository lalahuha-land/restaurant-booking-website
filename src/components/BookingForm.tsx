import React, { useState } from 'react';
import { Calendar, Clock, Users, ChefHat } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-yellow/10 to-primary-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <ChefHat className="h-10 w-10 md:h-12 md:w-12 text-primary-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark mb-4">
            Reserve Your
            <span className="block font-bold text-primary-red">Perfect Evening</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Secure your table at Bella Vista and prepare for an unforgettable dining experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 border border-primary-orange/20">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    <Calendar className="inline h-4 w-4 mr-2 text-primary-orange" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    <Clock className="inline h-4 w-4 mr-2 text-primary-orange" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    <Users className="inline h-4 w-4 mr-2 text-primary-orange" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-dark mb-3">
                    Special Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select occasion (optional)</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="date">Date Night</option>
                    <option value="business">Business Dinner</option>
                    <option value="celebration">Celebration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-semibold text-primary-dark mb-3">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-primary-red/30 rounded-xl focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please let us know about any allergies, dietary restrictions, or special requests..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-orange to-primary-red hover:from-primary-red hover:to-primary-orange text-primary-dark px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Confirm Reservation
                </button>
                <p className="text-sm text-primary-dark/60 mt-4">
                  You will receive a confirmation email within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;