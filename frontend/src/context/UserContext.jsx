import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('tn_user_profile');
    return saved ? JSON.parse(saved) : {
      name: 'Arul Selvam',
      email: 'arul.selvam@email.com',
      phone: '+91 98765 43210',
      age: 28,
      gender: 'Male',
      location: 'Chennai',
      bloodGroup: 'O+',
      avatar: 'A'
    };
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('tn_user_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tn_user_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('tn_user_history', JSON.stringify(history));
  }, [history]);

  const updateProfile = (data) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const addToHistory = (entry) => {
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...entry
    };
    setHistory(prev => [newEntry, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile, history, addToHistory, clearHistory }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
