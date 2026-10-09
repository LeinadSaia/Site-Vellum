import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: "Free",
    description: "Perfeito para experimentar a plataforma.",
    price: "R$ 0",
    features: [
      "Leitor Técnico básico",
      "Até 5 resumos por dia",
      "Suporte da comunidade",
    ],
    cta: "Começar grátis",
    href: "/register",
    popular: false,
  },
  {
    name: "Pro",
    description: "Fluência extrema e ferramentas avançadas.",
    price: "R$ 49",
    features: [
      "Leitor Técnico Ilimitado",
      "Tutor de Pronúncia em tempo real",
      "Explicações avançadas por IA",
      "Sincronização entre dispositivos",
      "Suporte prioritário"
    ],
    cta: "Assinar o Pro",
    href: "/register",
    popular: true,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Preços simples e transparentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Escolha o plano que se encaixa no seu ritmo de estudos.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col p-8 rounded-3xl backdrop-blur-sm transition-all md:w-1/2 
                ${plan.popular 
                  ? 'bg-background border border-primary shadow-[0_0_40px_rgba(30,144,255,0.15)] scale-100 md:scale-105 z-10' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={plan.href} className="mt-auto">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white shadow-md' : 'bg-white/10 hover:bg-white/20 text-foreground'}`}
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
