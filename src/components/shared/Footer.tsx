import React from 'react';
import Link from 'next/link';
import { Globe, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Vellum
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O ecossistema definitivo para fluência em inglês técnico.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">Comunidade</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Web</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Contato</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors">Preços</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentação</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Comunidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Termos de Serviço</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Vellum. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Construído com</span>
            <span className="text-red-500">♥</span>
            <span>para desenvolvedores.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
