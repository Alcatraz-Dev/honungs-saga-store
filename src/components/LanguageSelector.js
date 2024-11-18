import React, { useState } from 'react';
import Select from 'react-select';
import useFetch from '../hooks/useFetch';

const LanguageSelector = () => {
  // Fetch locales from the Strapi i18n plugin
  const { data, isLoading, error } = useFetch('/i18n/locales?populate=*');
  console.log(data?.[0]);
  const [selectedLocale, setSelectedLocale] = useState('sv'); // Default to Swedish

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // // Map locales to options format for React Select
  const localeOptions = data?.data?.map((locale) => ({
    value: locale.code, // Use "code" for the value
    label: locale.name, // Use "name" for the label
  }));
 

  const handleChange = (selectedOption) => {
    setSelectedLocale(selectedOption.value); // Update the selected locale
    console.log('Selected Locale:', selectedOption.value);
  };

  return (
    <Select
      options={localeOptions} // Pass the mapped options
      onChange={handleChange} // Handle selection change
      value={localeOptions?.find((option) => option.value === selectedLocale)} // Set the selected value
      placeholder="Select Language" // Placeholder for the select box
    />
  );
};

export default LanguageSelector;