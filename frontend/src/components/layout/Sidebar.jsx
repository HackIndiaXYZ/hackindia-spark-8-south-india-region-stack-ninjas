import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Stethoscope, Users, History, UserCircle, 
  ChevronLeft, ChevronRight, Heart, Leaf, Sparkles, BookOpen,
  Droplets, Dumbbell, Zap, Eye, Moon, Shield, Sun, Wind
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { HEALTH_TIPS } from '../../data/healthTips';
import { Card } from '../ui';

import { useLanguage } from '../../context/LanguageContext';

export const Sidebar = ({ isOpen, toggleSidebar, isCollapsed, setIsCollapsed, onSelectTip }) => {
  const { t, lang } = useLanguage();

  const menuItems = [
    { name: t('Dashboard', 'முகப்பு'), path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: t('Symptom Checker', 'அறிகுறி சரிபார்ப்பு'), path: '/symptoms', icon: <Stethoscope size={20} /> },
    { name: t('Doctors', 'மருத்துவர்கள்'), path: '/doctors', icon: <Users size={20} /> },
    { name: t('Home Remedies', 'வீட்டு வைத்தியம்'), path: '/remedies', icon: <Leaf size={20} /> },
    { name: t('Health Tips', 'ஆரோக்கிய குறிப்புகள்'), path: '/tips', icon: <Sparkles size={20} /> },
    { name: t('Health Resources', 'ஆரோக்கிய வளங்கள்'), path: '/guide', icon: <BookOpen size={20} /> },
    { name: t('History', 'வரலாறு'), path: '/history', icon: <History size={20} /> },
    { name: t('Profile', 'சுயவிவரம்'), path: '/profile', icon: <UserCircle size={20} /> },
  ];

  const IconMap = {
    Droplets, Dumbbell, Leaf, Zap, Eye, Moon, Shield, Sun, Wind
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 bg-surface-container-lowest border-r border-outline-variant/30 transition-all duration-300 md:translate-x-0",
        isCollapsed ? "w-20" : "w-64",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-outline-variant/30">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="text-white w-4 h-4 fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-primary text-lg leading-tight">Tamil Nalam</span>
                <span className="text-[10px] text-on-surface-variant font-medium leading-none">தமிழ் நலம்</span>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center shadow-lg mx-auto">
              <Heart className="text-white w-4 h-4 fill-white" />
            </div>
          )}
          <button 
            className="hidden md:flex p-1 rounded-md hover:bg-surface-container transition-colors text-on-surface-variant" 
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center rounded-xl transition-all duration-200 group px-3 py-3",
                isActive 
                  ? "bg-primary/10 text-primary font-semibold" 
                  : "text-on-surface hover:bg-surface-container hover:text-primary",
                isCollapsed ? "justify-center" : "gap-3"
              )}
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
            >
              <span className={isCollapsed ? "mx-auto" : ""}>{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
              
              {isCollapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-inverse-surface text-inverse-on-surface text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                  {item.name}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
