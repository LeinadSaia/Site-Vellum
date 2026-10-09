'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  const title = "Domine qualquer idioma com IA";
  const words = title.split(" ");

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-background z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8 z-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            O leitor técnico e tutor de pronúncia definitivo. Supere a barreira do idioma e alcance a fluência lendo e ouvindo o que realmente importa.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <Link href="/register">
            <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#09090B_0%,#1E90FF_50%,#09090B_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl transition-colors group-hover:bg-primary group-hover:text-white">
                Experimente o Vellum
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
