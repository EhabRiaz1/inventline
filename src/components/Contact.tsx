import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const toEmail = 'info@inventline.ae';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = form.subject.trim() || 'Website Enquiry';
    const body = [
      `Name: ${form.name}`.trim(),
      `Email: ${form.email}`.trim(),
      '',
      'Message:',
      form.message,
    ].join('\n');

    const mailtoHref = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoHref;
  };

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
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Get in <span className="text-blue-400">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Have questions about our services? Contact us for more information or to discuss your trading needs.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors block" href="tel:+97143979044">
                    +971 4 397 9044
                  </a>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors block" href="tel:+971524627279">
                    +971 52 462 7279
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <Globe className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Website</h3>
                  <a
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    href="https://www.inventline.ae"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.inventline.ae
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors" href="mailto:info@inventline.ae">
                    info@inventline.ae
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-400">
                    Al Qubaisi Building, Office # 302, 3rd Floor Sheikh Khalifa Bin Zayed Street, Karama, Dubai, UAE.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Website enquiry"
                      value={form.subject}
                      onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="Your message here..."
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:${toEmail}`}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Prefer email? Click here to email us at {toEmail}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;