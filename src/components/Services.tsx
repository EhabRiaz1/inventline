import React from 'react';
import { motion } from 'framer-motion';

type ServiceColor = 'red' | 'amber';

type Service = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay: number;
  color: ServiceColor;
};

const COLOR_STYLES: Record<
  ServiceColor,
  { hoverBorder: string; headerBg: string; headerGlow: string }
> = {
  red: {
    hoverBorder: 'hover:border-red-500/50',
    headerBg: 'bg-gradient-to-br from-red-500/15 via-slate-900/10 to-slate-950/30',
    headerGlow: 'shadow-[0_0_0_1px_rgba(239,68,68,0.12),0_0_40px_rgba(239,68,68,0.10)]',
  },
  amber: {
    hoverBorder: 'hover:border-amber-500/50',
    headerBg: 'bg-gradient-to-br from-amber-500/15 via-slate-900/10 to-slate-950/30',
    headerGlow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.12),0_0_40px_rgba(245,158,11,0.10)]',
  },
};

const ServiceCard = ({ title, description, imageSrc, imageAlt, delay, color }: Service) => {
  const styles = COLOR_STYLES[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-slate-900/40 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden ${styles.hoverBorder} transition-all`}
    >
      {/* Image header */}
      <div className={`relative ${styles.headerBg} ${styles.headerGlow}`}>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-56 md:h-64 object-contain p-8"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-8 pt-7">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      title: "Rice Trading",
      description: "Premium quality rice varieties from Pakistan to global markets with reliable supply chains and quality assurance.",
      imageSrc: "/rice.png",
      imageAlt: "Rice",
      color: "red",
      delay: 0.1
    },
    {
      title: "Potato Trading",
      description: "Fresh potato sourcing and trading with consistent quality, competitive pricing, and dependable delivery across markets.",
      imageSrc: "/potato.png",
      imageAlt: "Potato",
      color: "amber",
      delay: 0.2
    },
  ];

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
              Our <span className="text-blue-400">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              We offer a comprehensive range of trading and logistics services to meet your commodity needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;