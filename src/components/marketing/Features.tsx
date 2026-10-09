'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mic, Cpu } from 'lucide-react';

const features = [
  {
    title: "Leitor Técnico Inteligente",
    description: "Leia documentações, livros e artigos complexos com auxílio de IA. O Vellum traduz termos técnicos mantendo o jargão da área e oferece resumos instantâneos de parágrafos densos.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Tutor de Pronúncia",
    description: "Treine seu speaking com feedback em tempo real. Identifique falhas e melhore seu sotaque com exercícios interativos baseados no que você lê.",
    icon: <Mic className="w-8 h-8 text-primary" />,
    className: "md:col-span-1",
  },
  {
    title: "Explicação Profunda",
    description: "Não entendeu um conceito? O Vellum analisa o contexto e explica de forma didática, como se um engenheiro sênior estivesse ao seu lado.",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    className: "md:col-span-1",
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Uma plataforma de <span className="text-primary">alto desempenho</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Tudo que você precisa para dominar o vocabulário técnico de alto nível em um ecossistema integrado.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all hover:border-primary/50 ${feature.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 bg-background/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
