import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Logistics', to: 'logistics' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-16 py-6">
      {/* Logo */}
      <div>
        <span className="text-2xl font-bold text-blue-400">Invent Line Trading</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <button className="hidden md:block bg-black/30 backdrop-blur-sm border border-slate-700 text-white px-6 py-2 rounded-full hover:bg-black/50 transition-colors">
        Contact Us
      </button>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with blur effect */}
        <div 
          className="fixed inset-0 backdrop-blur-4xl bg-slate-900/50"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu content */}
        <div 
          className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-slate-900 border-l border-slate-700 p-8 transition-all duration-300 transform shadow-2xl ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end mb-8">
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-400 transition-colors cursor-pointer text-xl"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;