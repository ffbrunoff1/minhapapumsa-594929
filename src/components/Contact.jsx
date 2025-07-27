import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Aqui iria a lógica de envio do formulário
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="mt-4 text-lg text-dark/70 max-w-2xl mx-auto">
            Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.
            Preencha o formulário ou utilize um de nossos canais de atendimento.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-dark mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-secondary/10 text-secondary p-3 rounded-full mr-4">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-dark/70">Telefone</p>
                  <a
                    href="tel:+5544991040774"
                    className="font-semibold text-dark hover:text-secondary"
                  >
                    +55 44 99104-0774
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary/10 text-secondary p-3 rounded-full mr-4">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-dark/70">E-mail</p>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="font-semibold text-dark hover:text-secondary"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary/10 text-secondary p-3 rounded-full mr-4">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-dark/70">Endereço</p>
                  <p className="font-semibold text-dark">
                    padre lebret 801 g05 bloco 03
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-light-gray p-8 rounded-2xl shadow-subtle"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark/80 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark/80 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark/80 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full group"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    'Mensagem Enviada!'
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send
                        className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
