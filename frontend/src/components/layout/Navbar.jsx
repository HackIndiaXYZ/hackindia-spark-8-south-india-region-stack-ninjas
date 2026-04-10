import React from 'react';
import { Menu, Moon, Sun, Languages, UserCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';

export const Navbar = ({ toggleSidebar }) => {
  const { lang, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { profile } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="glass-nav sticky top-0 z-30 w-full h-16 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={toggleSidebar} className="md:hidden rounded-full p-2">
          <Menu className="w-6 h-6 text-on-surface" />
        </Button>
        {/* On mobile, title or subtle branding if needed */}
        <span className="md:hidden font-headline font-bold text-primary text-xl">Tamil Nalam</span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={toggleLanguage} className="rounded-full px-3">
          <Languages className="w-5 h-5 text-on-surface-variant" />
          <span className="hidden sm:inline ml-1 font-semibold">{lang === 'en' ? 'தமிழ்' : 'English'}</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="rounded-full p-2">
          {isDarkMode ? <Sun className="w-5 h-5 text-on-surface-variant" /> : <Moon className="w-5 h-5 text-on-surface-variant" />}
        </Button>
        <div className="h-8 w-px bg-outline-variant/30 mx-2 hidden sm:block"></div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/profile')}
          className="rounded-full flex items-center gap-2 pl-2 pr-3 bg-surface-container hover:bg-surface-container-high transition-colors"
        >
          <UserCircle className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline text-sm font-medium">{profile.name.split(' ')[0]}</span>
        </Button>
      </div>
    </nav>
  );
};
