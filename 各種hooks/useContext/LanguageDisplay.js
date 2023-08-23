// LanguageDisplay.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageDisplay = () => {
  const { language } = useLanguage();

  return <div>Current Language: {language}</div>;
};

export default LanguageDisplay;
