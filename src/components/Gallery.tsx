import React from 'react';
import { Camera, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Signature Pasta'
    },
    {
      url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Fresh Ingredients'
    },
    {
      url: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Artisan Desserts'
    },
    {
      url: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Wine Selection'
    },
    {
      url: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Elegant Plating'
    },
    {
      url: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Cozy Atmosphere'
    },
    {
      url: 'https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Premium Steaks'
    },
    {
      url: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Chef\'s Special'
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-20 bg-primary-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Camera className="h-10 w-10 md:h-12 md:w-12 text-primary-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-dark mb-4">
            A Feast for
            <span className="block font-bold text-primary-red">The Eyes</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-dark/70 max-w-2xl mx-auto">
            Experience the artistry and passion that goes into every dish at Bella Vista.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary-orange/30"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-primary-orange/20">
          <div className="flex justify-center items-center mb-4">
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary-red mr-2" />
            <span className="text-xl md:text-2xl font-bold text-primary-dark">@bellavista_restaurant</span>
          </div>
          <p className="text-primary-dark/70 mb-6 text-sm md:text-base">
            Follow us on Instagram for daily culinary inspiration and behind-the-scenes moments.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-primary-dark/60">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-primary-orange mr-1" />
              <span>25K followers</span>
            </div>
            <div className="w-1 h-1 bg-primary-red/40 rounded-full"></div>
            <div className="flex items-center">
              <Camera className="h-4 w-4 text-primary-orange mr-1" />
              <span>1.2K posts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;