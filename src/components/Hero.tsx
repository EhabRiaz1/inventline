import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://lirp.cdn-website.com/bc4439fa/dms3rep/multi/opt/what+is+physical+commodity+trading-1920w.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40"></div>
      </div>
      
      {/* Glass container */}
      <div className="relative z-10 w-[95%] h-[90vh] mx-auto rounded-[40px] overflow-hidden border border-slate-700 backdrop-blur-sm bg-slate-900/20">
        {/* Navbar integrated within the glass container */}
        <Navbar />
        
        {/* Content container */}
        <div className="h-[calc(100%-80px)] w-full px-16 py-8 flex flex-col">
          {/* Main content */}
          <div className="flex flex-row h-full">
            {/* Left side - Text content */}
            <div className="w-1/2 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold mb-6"
              >
                Global
                <br />
                Commodity
                <br />
                <span className="text-blue-400">Trading</span>
                <br />
                <span className="text-blue-400">Excellence</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8 max-w-lg"
              >
                {/* Line removed */}
              </motion.p>
            </div>
            
            {/* Right side - Stats */}
            <div className="w-1/2 flex items-center justify-center relative">
              {/* Stats */}
              <div className="absolute bottom-10 right-10">
                <div className="flex items-end gap-2">
                  <h2 className="text-7xl font-bold">20+</h2>
                  <div className="mb-2">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">Years of trading excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dangling Service Cards */}
          <div className="absolute bottom-44 left-16 perspective-[1200px]">
            {/* Rice Trading card */}
            <motion.div
              initial={{ opacity: 0, rotateZ: -5, y: 100 }}
              animate={{ opacity: 1, rotateZ: -5, y: 0 }}
              whileHover={{ rotateZ: 0, y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-0 top-0 bg-red-400/90 p-6 rounded-xl w-64 shadow-xl origin-top-left"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg)' }}
            >
              <div className="mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">🌾</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Rice Trading</h3>
              <p className="text-sm mb-4">Premium quality rice varieties from Pakistan to global markets with reliable supply chains.</p>
              <button className="bg-black/20 px-4 py-2 rounded-full text-sm">Explore</button>
            </motion.div>
            
            {/* Grain Trading card */}
            <motion.div
              initial={{ opacity: 0, rotateZ: 5, y: 100 }}
              animate={{ opacity: 1, rotateZ: 5, y: 0 }}
              whileHover={{ rotateZ: 0, y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-52 top-10 bg-green-400/90 p-6 rounded-xl w-64 shadow-xl origin-top"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg)', zIndex: 10 }}
            >
              <div className="mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">🌽</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Grain Trading</h3>
              <p className="text-sm mb-4">Diverse grain solutions connecting farmers with international markets through our global network.</p>
              <button className="bg-black/20 px-4 py-2 rounded-full text-sm">Explore</button>
            </motion.div>
            
            {/* Commodity Trading card */}
            <motion.div
              initial={{ opacity: 0, rotateZ: -3, y: 100 }}
              animate={{ opacity: 1, rotateZ: -3, y: 0 }}
              whileHover={{ rotateZ: 0, y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute left-96 top-20 bg-blue-400/90 p-6 rounded-xl w-64 shadow-xl origin-top-right"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(8deg)', zIndex: 20 }}
            >
              <div className="mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white">📦</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Commodity Trading</h3>
              <p className="text-sm mb-4">Comprehensive trading services for various commodities with expert market insights and logistics.</p>
              <button className="bg-black/20 px-4 py-2 rounded-full text-sm">Explore</button>
            </motion.div>
          </div>
          
          {/* Circular Scroll down button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative w-24 h-24"
              >
                {/* Spinning text */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text>
                      <textPath href="#circle" className="text-xs text-gray-400 uppercase tracking-widest">
                        Explore More • Explore More • 
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                {/* Center button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <ChevronDown size={20} className="text-white" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;