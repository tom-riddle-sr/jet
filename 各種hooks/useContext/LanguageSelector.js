// LanguageSelector.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select id="language-select" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
