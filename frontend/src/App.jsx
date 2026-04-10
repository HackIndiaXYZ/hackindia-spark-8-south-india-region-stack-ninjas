import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { cn } from './utils/cn';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { HealthTips } from './components/layout/HealthTips';
import { HealthTipModal } from './components/ui/HealthTipModal';

// Pages
import { Home } from './pages/Home';
import { Symptoms } from './pages/Symptoms';
import { Doctors } from './pages/Doctors';
import { Guide } from './pages/Guide';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { History } from './pages/History';
import { Profile } from './pages/Profile';
import { Remedies } from './pages/Remedies';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedHealthTip, setSelectedHealthTip] = useState(null);

  return (
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <UserProvider>
            <div className="flex bg-background min-h-screen font-body text-on-surface">
              {/* Sidebar */}
              <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={() => setIsSidebarOpen(false)} 
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
              
              {/* Overlay for mobile sidebar */}
              {isSidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 z-30 md:hidden" 
                  onClick={() => setIsSidebarOpen(false)}
                ></div>
              )}
              
              {/* Main Content Area */}
              <div className={cn(
                "flex-1 flex flex-col min-w-0 transition-all duration-300",
                isCollapsed ? "md:ml-20" : "md:ml-64"
              )}>
                <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />
                
                <div className="flex-1 flex flex-col lg:flex-row min-h-0">
                  <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto h-full">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/symptoms" element={<Symptoms />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/remedies" element={<Remedies />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/guide" element={<Guide />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/dashboard" element={<Dashboard onSelectTip={setSelectedHealthTip} />} />
                      </Routes>
                    </div>
                  </main>
                  
                  {/* Health Tips Side Bar */}
                  <HealthTips onSelectTip={setSelectedHealthTip} />
                </div>
                
                <Footer />
              </div>
            </div>

            <HealthTipModal 
              tip={selectedHealthTip} 
              onClose={() => setSelectedHealthTip(null)} 
            />
          </UserProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
