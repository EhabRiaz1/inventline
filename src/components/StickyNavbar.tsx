import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const StickyNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };

    // Initial check
    checkMobile();

    // Handle scroll to determine navbar visibility
    const handleScroll = () => {
      // Get the hero section height to determine when to show the navbar
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection?.getBoundingClientRect().height || 0;
      
      if (window.scrollY > heroHeight - 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Logistics', to: 'logistics' },
    { name: 'Contact', to: 'contact' },
  ];

  // Don't render anything if not visible or on mobile
  if (!visible || isMobile) return null;

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <div className="w-[95%] max-w-[1200px] rounded-full bg-slate-900 backdrop-blur-lg border border-blue-500/30 shadow-2xl px-6 md:px-8 py-4 flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <div>
          <span className="text-xl font-bold text-blue-400">Invent Line Trading</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-1.5 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
          Contact Us
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Full-screen Mobile Menu */}
        <div 
          className={`fixed inset-0 z-[100] transition-all duration-500 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop with blur effect */}
          <div 
            className="fixed inset-0 backdrop-blur-4xl bg-slate-900/50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu content container */}
          <div className="relative h-full w-full flex flex-col items-center justify-between p-8">
            {/* Header with company info and close button */}
            <div className="w-full flex flex-col items-center">
              <div className="absolute top-8 right-8">
                <button 
                  className="text-white bg-slate-800/60 p-2 rounded-full hover:bg-blue-600 transition-all" 
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="text-center mb-16">
                <h3 className="text-xl font-bold text-white">Invent Line Trading</h3>
                <p className="text-gray-400">Connecting global markets</p>
                <h2 className="text-3xl font-bold text-blue-400 mt-6">Menu</h2>
              </div>
            </div>
            
            {/* Menu items - centered vertically and horizontally */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center space-y-10">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`text-white hover:text-blue-400 transition-all cursor-pointer text-2xl ${
                      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
                      transitionProperty: 'all',
                      transitionDuration: '400ms'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Contact button at bottom */}
            <div 
              className={`mb-8 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${navItems.length * 75 + 100}ms` : '0ms',
                transitionProperty: 'all',
                transitionDuration: '400ms'
              }}
            >
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar; 