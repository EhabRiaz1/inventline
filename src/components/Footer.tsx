import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-8 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-blue-400">Invent Line Trading</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting markets across UAE and Pakistan with premium commodities and reliable trading solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+97143979044"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-2 text-sm text-white hover:bg-emerald-600 hover:border-emerald-500/40 transition-colors"
              >
                <Phone size={16} />
                Call
              </a>
              <a
                href="mailto:info@inventline.ae"
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-2 text-sm text-white hover:bg-blue-600 hover:border-blue-500/40 transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Logistics', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {['Rice Trading', 'Potato Trading'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-4 mt-1" />
                <span className="text-gray-400">Al Qubaisi Building, Office # 302, 3rd Floor, Karama, Dubai, UAE.</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-4 mt-1" />
                <a className="text-gray-400 hover:text-blue-400 transition-colors" href="tel:+97143979044">
                  +971 4 397 9044
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-4 mt-1" />
                <a className="text-gray-400 hover:text-blue-400 transition-colors" href="mailto:info@inventline.ae">
                  info@inventline.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Invent Line Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;