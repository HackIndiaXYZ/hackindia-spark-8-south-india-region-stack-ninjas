import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 hero-gradient rounded-xl flex items-center justify-center shadow-md">
              <Heart className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="text-xl font-extrabold text-primary font-headline">Tamil Nalam</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-on-surface-variant/70">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="tel:108" className="text-error hover:scale-105 transition-all font-bold">Emergency: 108</a>
          </div>
          
          <div className="text-xs font-semibold text-on-surface-variant/50 tracking-wider">
            © 2024 TAMIL NALAM • தமிழ் நலம்
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-on-surface-variant/40 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
            Empowering the communities of Tamil Nadu with accessible, bilingual healthcare guidance powered by technology.
          </p>
        </div>
      </div>
    </footer>
  );
};
