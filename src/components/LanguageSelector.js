import React, { useContext } from 'react';
import Select from 'react-select';
import { LanguageContext } from '../context/LanguageContext';

// Define the options with flag images
const localeOptions = [
  {
    value: 'ar',
    label: 'Arabic (ar)',
    flag: 'https://flagcdn.com/w320/sa.png', // Example: Saudi Arabia flag for Arabic
  },
  {
    value: 'en',
    label: 'English (en)',
    flag: 'https://flagcdn.com/w320/gb.png', // Example: UK flag for English
  },
  {
    value: 'sv',
    label: 'Swedish (sv)',
    flag: 'https://flagcdn.com/w320/se.png', // Sweden flag
  },
];

// Custom single-value display (selected option)
const SingleValue = ({ data }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src={data.flag}
      alt=""
      style={{ width: 20, height: 15, marginRight: 10, objectFit: 'cover' }}
    />
    {data.label}
  </div>
);

// Custom option display in the dropdown
const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
      }}
    >
      <img
        src={data.flag}
        alt=""
        style={{ width: 20, height: 15, marginRight: 10, objectFit: 'cover' }}
      />
      {data.label}
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
      placeholder="Select Language"
      components={{ SingleValue, Option: CustomOption }} // Apply custom renderers
    />
  );
};

export default LanguageSelector;