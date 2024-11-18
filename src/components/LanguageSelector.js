import React, { useContext } from 'react';
import Select from 'react-select';
import { LanguageContext } from '../context/LanguageContext';

// Define the options with flag images and language names
const localeOptions = [
  {
    value: 'ar',
    flag: 'https://flagcdn.com/w320/sa.png', // Saudi Arabia flag for Arabic
    label: 'Arabic', // Language name
  },
  {
    value: 'en',
    flag: 'https://flagcdn.com/w320/gb.png', // UK flag for English
    label: 'English', // Language name
  },
  {
    value: 'sv',
    flag: 'https://flagcdn.com/w320/se.png', // Sweden flag for Swedish
    label: 'Swedish', // Language name
  },
];

// Custom single-value display (selected option)
const SingleValue = ({ data }) => (
  <div className="flex justify-center items-center">
    <img
      src={data.flag}
      alt="flag"
      className="w-5 h-5 object-cover rounded-sm mr-2" // Adjusted size and added margin to space the flag
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
      className="flex justify-start items-center p-2 cursor-pointer bg-gray-800 hover:bg-gray-700"
    >
      <img
        src={data.flag}
        alt="flag"
        className="w-5 h-5 object-cover rounded-sm mr-2" // Adjusted size and margin
      />
      <span className="text-white">{data.label}</span> {/* Display language name */}
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
      components={{ SingleValue, Option: CustomOption }}
      className="w-16 flex items-center justify-center"
      isSearchable={false} // Disable searching for languages
      isClearable={false} // Disable clearing the selection
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: '#151618', // Dark background
          border: 'none', // Remove the border around the control
          borderRadius: '0.375rem', // Tailwind rounded-md
          cursor: 'pointer',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px', // Adjust padding to reduce height
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: '#151618', // Dropdown dark background
          borderRadius: '0.375rem', // Tailwind rounded-md
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? '#2c2c2c' : '#151618', // Hover effect
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
          padding: '0', // Remove default padding
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: 'none', // Remove the line separator between the flag and the arrow
        }),
        placeholder: (base) => ({
          ...base,
          display: 'none', // Hide the placeholder
        }),
      }}
    />
  );
};

export default LanguageSelector;