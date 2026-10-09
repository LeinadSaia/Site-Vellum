'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const words = ["fluência", "pronúncia", "leitura", "carreira"];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-background z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8 z-10">
        <div className="space-y-4 md:space-y-6 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight flex flex-col items-center sm:block">
            <span className="mr-3">Domine sua</span>
            <span className="relative inline-flex h-[1.1em] w-[280px] md:w-[400px] overflow-hidden align-bottom">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute left-0 text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 w-full text-center sm:text-left"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="mt-2 sm:mt-0 sm:ml-2 block sm:inline">em inglês técnico</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-4"
          >
            O leitor técnico e tutor de pronúncia definitivo. Supere a barreira do idioma e alcance a fluência lendo e ouvindo o que realmente importa.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
