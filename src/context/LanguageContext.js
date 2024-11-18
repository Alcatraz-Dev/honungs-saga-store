import React, { createContext, useState } from 'react';

// Create the Language Context
export const LanguageContext = createContext();

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sv'); // Default language: Swedish

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};