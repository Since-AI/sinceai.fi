import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <>
      
      <img
        src="/assets/logo/SINCE AI white.png"
        className={className ? className : "w-auto h-[28px]"}
        alt="Since AI — Europe's AI builders community logo"
      />
    </>
  );
};

export default Logo;
