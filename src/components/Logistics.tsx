import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Ship, PlaneTakeoff, BarChart3 } from 'lucide-react';

const Logistics = () => {
  return (
    <div className="min-h-screen py-24 px-8">
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
              <h2 className="text-4xl font-bold mb-6">Global <span className="text-blue-400">Logistics</span> Network</h2>
              <p className="text-gray-300 mb-6">
                Our extensive logistics network ensures smooth transportation of commodities across international borders. 
                We utilize a combination of sea, land, and air freight to optimize delivery timelines and cost-efficiency.
              </p>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <Truck className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Road Transport</h3>
                    <p className="text-gray-400">Door-to-door delivery with our extensive network of trucking partners.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <Ship className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
                    <p className="text-gray-400">Cost-effective solutions for large volume shipments across continents.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <PlaneTakeoff className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                    <p className="text-gray-400">Express delivery options for time-sensitive shipments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                    <BarChart3 className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Performance Tracking</h3>
                    <p className="text-gray-400">Real-time monitoring and analytics for all shipments.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 relative">
                  <h3 className="text-2xl font-bold mb-4 text-center">Our Global Reach</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-6 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="World map with logistics routes" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400">15+</div>
                      <div className="text-sm text-gray-400">Shipping Routes</div>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400">3</div>
                      <div className="text-sm text-gray-400">Distribution Centers</div>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400">24/7</div>
                      <div className="text-sm text-gray-400">Tracking Service</div>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400">99%</div>
                      <div className="text-sm text-gray-400">On-time Delivery</div>
                    </div>
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

export default Logistics;