"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion-wrapper";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <MotionDiv
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="font-semibold text-lg tracking-tight" data-testid="link-logo">
            Bruno <span className="text-primary">Escorse</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" data-testid="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            data-testid="button-header-cta"
          >
            Entrar em contato
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </MotionDiv>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5554999060340?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg"
                data-testid="button-mobile-cta"
              >
                Entrar em contato
              </a>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
}
