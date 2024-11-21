import React from 'react';

import Select from '../../atoms/Select/Select';

interface StatusSelectProps {
  onChange: (value: string) => void;
  defaultValue?: string;
}

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
];

const StatusSelect: React.FC<StatusSelectProps> = ({
  onChange,
  defaultValue,
}) => {
  return (
    <Select
      options={statusOptions}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default StatusSelect;
