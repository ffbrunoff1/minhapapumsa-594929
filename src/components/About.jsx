import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={imageVariants}>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about.jpg"
              alt="Equipe de construção analisando planta"
              className="rounded-2xl shadow-strong w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Construindo o Futuro com{' '}
              <span className="gradient-text">Excelência</span>
            </h2>
            <p className="text-dark/70 mb-8 text-lg">
              Na NTC Brasil, cada projeto é uma missão. Combinamos décadas de
              experiência com as mais recentes inovações tecnológicas para
              entregar resultados que superam as expectativas. Nosso compromisso
              é com a qualidade, a segurança e a sustentabilidade em cada etapa
              do processo.
            </p>
            <div className="space-y-6">
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4">
                  <Target className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-dark">Nossa Missão</h3>
                  <p className="text-dark/70">
                    Entregar soluções de construção inovadoras e de alta
                    qualidade que impulsionam o progresso e criam valor
                    duradouro para nossos clientes e comunidades.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4">
                  <Building className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-dark">Nossa Visão</h3>
                  <p className="text-dark/70">
                    Ser a empresa de construção mais confiável e respeitada do
                    Brasil, reconhecida pela excelência, integridade e
                    compromisso com o sucesso do cliente.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
