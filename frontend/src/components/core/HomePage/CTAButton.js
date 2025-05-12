import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, active, linkto, onClick, external }) => {
  const baseStyles = `text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold 
    transition-all duration-200 drop-shadow-[2px_2px_rgba(255,255,255,0.18)] 
    hover:drop-shadow-none hover:scale-95`;

  const activeStyles = active 
    ? 'bg-yellow-50 text-black hover:bg-yellow-100' 
    : 'bg-richblack-800 hover:bg-richblack-700';

  if (external && linkto) {
    return (
      <a
        href={linkto}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${activeStyles}`}
      >
        {children}
      </a>
    );
  }

  if (linkto) {
    return (
      <Link to={linkto} className={`${baseStyles} ${activeStyles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${activeStyles}`}>
      {children}
    </button>
  );
};

export default CTAButton;