// 可以不管父子關係傳遞Component
// 把想傳遞的東西設為value傳進被Provider包住的Childern中，以此實現傳遞

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();
// 先創建一個Context內容

export const LanguageProvider = ({ children }) => {
//Provider寫各種要傳的實際內容

  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {/* 以value形式將數據傳入prvider內部給children */}
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
  //useContext使用要傳遞的數據
};
