import React, { useState } from 'react';
import Select from 'react-select';
import useFetch from '../hooks/useFetch';

const LanguageSelector = () => {
  // Fetch locales using the custom hook
  const { data, isLoading, error } = useFetch('/i18n/locales');
  const [selectedLocale, setSelectedLocale] = useState('sv'); // Default language: Swedish

  // Debug fetched data
  console.log('Data from useFetch:', data);

  // Handle loading and error states
  if (isLoading) return <p>Loading languages...</p>;
  if (error) return <p>Error loading locales: {error.message}</p>;

  // Map data to React Select options format
  const localeOptions = data?.map((locale) => ({
    value: locale.code, // Code for React Select's value
    label: locale.name, // Name for React Select's label
  }));

  // Debug mapped options
  console.log('Mapped Locale Options:', localeOptions);

  // Handle language selection
  const handleChange = (selectedOption) => {
    setSelectedLocale(selectedOption.value);
    console.log('Selected Language:', selectedOption.value);
  };

  return (
    <Select
      options={localeOptions} // Options for React Select
      onChange={handleChange} // Change handler
      value={localeOptions?.find((option) => option.value === selectedLocale)} // Default value
      placeholder="Select Language"
    />
  );
};

export default LanguageSelector;