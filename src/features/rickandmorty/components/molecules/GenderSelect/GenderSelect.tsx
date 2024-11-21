import React from 'react';

import Select from '../../atoms/Select/Select';

interface GenderSelectProps {
  onChange: (value: string) => void;
  defaultValue?: string;
}

const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'genderless', label: 'Genderless' },
  { value: 'unknown', label: 'Unknown' },
];

const GenderSelect: React.FC<GenderSelectProps> = ({
  onChange,
  defaultValue,
}) => {
  return (
    <Select
      options={genderOptions}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default GenderSelect;
