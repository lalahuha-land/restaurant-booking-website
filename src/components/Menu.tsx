import React, { useState } from 'react';
import { Utensils, Wine, Coffee, Award } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: Utensils },
    { id: 'mains', name: 'Main Courses', icon: Award },
    { id: 'desserts', name: 'Desserts', icon: Coffee },
    { id: 'wines', name: 'Wine Selection', icon: Wine }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Burrata di Puglia',
        description: 'Creamy burrata cheese with heirloom tomatoes, basil oil, and aged balsamic',
        price: '$18',
        dietary: 'V'
      },
      {
        name: 'Crudo di Tonno',
        description: 'Yellowfin tuna crudo with citrus, avocado, and micro herbs',
        price: '$24',
        dietary: 'GF'
      },
      {
        name: 'Antipasto della Casa',
        description: 'Selection of Italian cured meats, aged cheeses, and marinated vegetables',
        price: '$28',
        dietary: ''
      },
      {
        name: 'Arancini Siciliani',
        description: 'Saffron risotto balls stuffed with mozzarella and peas, truffle aioli',
        price: '$16',
        dietary: 'V'
      }
    ],
    mains: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shank with saffron risotto and gremolata',
        price: '$42',
        dietary: ''
      },
      {
        name: 'Branzino in Crosta',
        description: 'Mediterranean sea bass in herb crust with roasted vegetables',
        price: '$38',
        dietary: 'GF'
      },
      {
        name: 'Pasta all\'Aragosta',
        description: 'House-made pasta with Maine lobster in light tomato cream sauce',
        price: '$45',
        dietary: ''
      },
      {
        name: 'Bistecca Fiorentina',
        description: '32oz dry-aged Porterhouse steak with rosemary potatoes (for two)',
        price: '$85',
        dietary: 'GF'
      },
      {
        name: 'Risotto ai Porcini',
        description: 'Carnaroli rice with wild porcini mushrooms and Parmigiano-Reggiano',
        price: '$32',
        dietary: 'V, GF'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu della Casa',
        description: 'Classic tiramisu with espresso-soaked ladyfingers and mascarpone',
        price: '$14',
        dietary: 'V'
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with sweet ricotta and chocolate chips',
        price: '$12',
        dietary: 'V'
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Vanilla panna cotta with mixed berry compote',
        price: '$13',
        dietary: 'V, GF'
      },
      {
        name: 'Gelato Artigianale',
        description: 'Daily selection of house-made gelato and sorbetto',
        price: '$8',
        dietary: 'V'
      }
    ],
    wines: [
      {
        name: 'Barolo DOCG 2019',
        description: 'Piedmont - Full-bodied with notes of cherry and truffle',
        price: '$28/glass',
        dietary: ''
      },
      {
        name: 'Pinot Grigio Alto Adige 2022',
        description: 'Crisp and mineral with citrus and white flower notes',
        price: '$14/glass',
        dietary: ''
      },
      {
        name: 'Chianti Classico Riserva 2020',
        description: 'Tuscany - Elegant with cherry, leather, and herb complexity',
        price: '$22/glass',
        dietary: ''
      },
      {
        name: 'Prosecco di Valdobbiadene DOCG',
        description: 'Delicate bubbles with apple and pear notes',
        price: '$16/glass',
        dietary: ''
      }
    ]
  };

  return (
    <>
      <div className="batik-divider"></div>
      <section id="menu" className="py-16 md:py-20 bg-porcelain text-emerald font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-emerald mb-4">
              Our Culinary
              <span className="block font-bold text-highlight">Masterpieces</span>
            </h2>
            <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto">
              Each dish is crafted with the finest ingredients and time-honored Italian techniques.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 md:px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-highlight to-accent text-primary shadow-lg'
                      : 'bg-accent/20 text-accent hover:bg-accent/30 border border-accent/40'
                  }`}
                >
                  <IconComponent className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:gap-8">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:justify-between md:items-start p-4 md:p-6 border border-accent/40 hover:border-highlight/50 transition-all duration-300 rounded-lg bg-accent/20 hover:bg-accent/30"
                >
                  <div className="flex-1 mb-3 md:mb-0">
                    <div className="flex flex-col md:flex-row md:items-center mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-emerald mb-1 md:mb-0">{item.name}</h3>
                      {item.dietary && (
                        <span className="text-xs bg-highlight text-primary px-2 py-1 rounded-full self-start md:ml-3">
                          {item.dietary}
                        </span>
                      )}
                    </div>
                    <p className="text-accent leading-relaxed text-sm md:text-base">{item.description}</p>
                  </div>
                  <div className="md:ml-8 text-left md:text-right">
                    <span className="text-xl md:text-2xl font-bold text-highlight">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Legend */}
          <div className="text-center mt-8 md:mt-12 text-sm text-accent/70">
            <p>V = Vegetarian | GF = Gluten Free</p>
            <p className="mt-2">Please inform us of any allergies or dietary restrictions</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;