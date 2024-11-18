import React, { useContext } from 'react';
import Select from 'react-select';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  // Hardcoded language options
  const localeOptions = [
    { value: 'ar', label: 'Arabic (ar)' },
    { value: 'en', label: 'English (en)' },
    { value: 'sv', label: 'Swedish (sv)' },
  ];

  const handleChange = (selectedOption) => {
    changeLanguage(selectedOption.value);
    console.log('Language changed to:', selectedOption.value);
  };

  return (
    <Select
      options={localeOptions}
      onChange={handleChange}
      value={localeOptions.find((option) => option.value === language)}
      placeholder="Select Language"
    />
  );
};

export default LanguageSelector;