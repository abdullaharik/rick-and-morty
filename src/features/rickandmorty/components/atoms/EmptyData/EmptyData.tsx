import React from 'react';

const EmptyData: React.FC = () => {
  return (
    <div className='text-center p-5'>
      <svg
        width='100'
        height='100'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='mb-5 mx-auto'
      >
        <path
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'
          fill='currentColor'
        />
      </svg>
      <p>No data available</p>
    </div>
  );
};

export default EmptyData;
