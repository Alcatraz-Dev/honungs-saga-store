 import React, { useContext } from 'react';
import Select from 'react-select';
import { LanguageContext } from '../context/LanguageContext';

// Define the options with flag images
const localeOptions = [
  {
    value: 'ar',
    flag: 'https://flagcdn.com/w320/sa.png', // Saudi Arabia flag for Arabic
  },
  {
    value: 'en',
    flag: 'https://flagcdn.com/w320/gb.png', // UK flag for English
  },
  {
    value: 'sv',
    flag: 'https://flagcdn.com/w320/se.png', // Sweden flag
  },
];

// Custom single-value display (selected option)
const SingleValue = ({ data }) => (
  <div className="flex justify-center items-center ">
    <img
      src={data.flag}
      alt="flag"
      className="w-4 h-4 object-cover rounded-sm"
    />
  </div>
);

// Custom option display in the dropdown
const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex justify-center items-center p-2 cursor-pointer bg-gray-800 hover:bg-gray-700 border-b border-gray-700"
    >
      <img
        src={data.flag}
        alt="flag"
        className="w-4 h-4 object-cover rounded-sm"
      />
    </div>
  );
};

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChange = (selectedOption) => {
    changeLanguage(selectedOption.value);
    console.log('Language changed to:', selectedOption.value);
  };

  return (
    <Select
      options={localeOptions}
      onChange={handleChange}
      value={localeOptions.find((option) => option.value === language)}
      placeholder="🌍" // Placeholder with a globe emoji
      components={{ SingleValue, Option: CustomOption }}
      className="w-24 flex items-center justify-center" // Tailwind width for dropdown
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: '#1e1e1e', // Dark background
          border: '1px solid #3a3a3a',
          borderRadius: '0.375rem', // Tailwind rounded-md
          cursor: 'pointer',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center', // Ensure center alignment for the selected value
          justifyContent: 'center',
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: '#1e1e1e', // Dropdown dark background
          borderRadius: '0.375rem', // Tailwind rounded-md
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? '#2c2c2c' : '#1e1e1e', // Hover effect
          color: '#fff',
        }),
        singleValue: (base) => ({
          ...base,
          display: 'flex',
          justifyContent: 'center', // Center the flag in the selected value area
          alignItems: 'center',
          padding: '0', // Remove any padding
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: '#fff', // Indicator color
        }),
        placeholder: (base) => ({
          ...base,
          color: '#aaa',
        }),
      }}
    />
  );
};

export default LanguageSelector;