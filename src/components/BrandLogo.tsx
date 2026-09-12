import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  inverted = false
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizeClasses = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-xs',
    lg: 'text-xs sm:text-sm',
    xl: 'text-sm sm:text-base',
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span className={`font-black tracking-wider uppercase leading-none transition-colors ${
        sizeClasses[size]
      } ${
        inverted ? 'text-[#173D8F]' : 'text-white'
      }`}>
        Sphere
      </span>
      <span className={`font-bold tracking-widest text-[#20A8AD] uppercase mt-0.5 ${
        subSizeClasses[size]
      }`}>
        by Léa
      </span>
    </div>
  );
};

