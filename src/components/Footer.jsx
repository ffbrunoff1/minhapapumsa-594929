import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-dark text-primary"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753229856798_0.png"
                alt="NTC Brasil Logo"
                className="h-12 w-auto mb-4 bg-primary p-2 rounded-md"
              />
            </a>
            <p className="max-w-xs text-primary/70">
              Construindo o futuro com inovação, qualidade e excelência.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:ml-auto md:text-right">
            <h3 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Contato
            </h3>
            <ul className="space-y-3 text-primary/70">
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>padre lebret 801 g05 bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-primary/50">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil 12345. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
