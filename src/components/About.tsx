import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-24 px-8 flex items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-[40px] overflow-hidden p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">About <span className="text-blue-400">Invent Line Trading</span></h2>
              <p className="text-gray-300 mb-6">
                Invent Line Trading is a premier trading company connecting markets across UAE and Pakistan. 
                With over a decade of experience, we specialize in premium rice and potatoes, backed by reliable trading solutions.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to create sustainable, efficient supply chains that benefit producers and consumers alike. 
                Through strategic partnerships and hands-on market expertise, we ensure consistent quality, competitive pricing, and dependable delivery for every shipment.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 blur-xl rounded-full"></div>
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">12+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">45+</div>
                    <div className="text-sm text-gray-400">Global Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
                    <div className="text-sm text-gray-400">Shipments Per Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                    <div className="text-sm text-gray-400">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;