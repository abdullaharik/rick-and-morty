import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, defaultValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    onChange(value);
  };

  return (
    <select value={defaultValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
