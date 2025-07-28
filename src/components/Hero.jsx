import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-light-gray overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary to-primary"></div>
      <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl text-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark tracking-tighter mb-6"
            variants={itemVariants}
          >
            Obras de qualidade na{' '}
            <span className="gradient-text">Construção Civil</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Especializada em drenagem
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn btn-primary group">
              Vamos Conversar sobre Seu Projeto!
              <ArrowRight
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
