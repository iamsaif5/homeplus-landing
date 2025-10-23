import React from 'react';

const Heading = ({ isLight = false, children }) => {
  return <h1 className={`text-[64px] my-[34px] leading-18  ${isLight ? 'text-white' : 'text-black'} font-medium`}>{children}</h1>;
};

export default Heading;
