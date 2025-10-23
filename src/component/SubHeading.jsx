import React from 'react';

const SubHeading = ({ isLight = false, children, className }) => {
  return (
    <h2
      className={`text-[36px] md:text-[50px] my-5 md:my-[34px] font-light leading-8 md:leading-[58px]  ${
        isLight ? 'text-white' : 'text-[#3B3B33]'
      } font-medium ${className}`}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
