import React from 'react';

const BlurCircle = ({ className }) => {
  return (
    <div
      className={`w-60 h-60 rounded-full bg-red-500 blur-3xl opacity-20 pointer-events-none ${className}`}
    ></div>
  );
};

export default BlurCircle;
