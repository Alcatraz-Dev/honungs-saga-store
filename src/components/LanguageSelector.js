import React, { useState } from 'react';
import Select from 'react-select';
import useFetch from '../hooks/useFetch';

const LanguageSelector = () => {
  const { data: locales } = useFetch(`/locales`);
  console.log('Locales:', locales);
  const [selectedLocale, setSelectedLocale] = useState('sv');

  // Map locales to the format React Select requires
  const localeOptions = locales?.map((locale) => ({
    value: locale.code,
    label: locale.name,
  }));

  const handleChange = (selectedOption) => {
    setSelectedLocale(selectedOption.value);
    console.log('Selected Locale:', selectedOption.value);
  };

  return (
    <Select
      options={localeOptions}
      onChange={handleChange}
      value={localeOptions?.find((option) => option.value === selectedLocale)}
      placeholder="Select Language"
    />
  );
};

export default LanguageSelector;