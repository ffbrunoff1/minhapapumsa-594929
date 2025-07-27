import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Utilizamos materiais de primeira linha e mão de obra qualificada para garantir acabamentos impecáveis e durabilidade estrutural.',
    },
    {
      icon: Zap,
      title: 'Inovação Tecnológica',
      description:
        'Adotamos as mais recentes tecnologias e métodos construtivos para otimizar processos, aumentar a eficiência e garantir a precisão.',
    },
    {
      icon: Clock,
      title: 'Compromisso com Prazos',
      description:
        'Planejamento rigoroso e gerenciamento eficiente de projetos para garantir a entrega da sua obra dentro do cronograma acordado.',
    },
    {
      icon: ShieldCheck,
      title: 'Segurança em Primeiro Lugar',
      description:
        'Implementamos os mais altos padrões de segurança no trabalho, protegendo nossa equipe, nossos clientes e o seu investimento.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-2xl mx-auto">
            Entendemos que cada detalhe importa. Por isso, oferecemos um serviço
            pautado na excelência e confiança.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-2xl shadow-subtle hover:shadow-strong transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="bg-secondary/10 text-secondary rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-dark/70 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
