import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <>
      
      <img
        src="assets/logo/logo.png"
        className={className ? className : "w-auto h-[28px]"}
        alt="Since AI Logo"
      />
    </>
  );
};

export default Logo;
