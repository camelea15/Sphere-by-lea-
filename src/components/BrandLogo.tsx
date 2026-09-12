import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false,
  inverted = false
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32',
  };

  const [imgSrc, setImgSrc] = useState('/logo.svg?v=3');
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (imgSrc.startsWith('/logo.svg')) {
      setImgSrc('/logo.png?v=3');
    } else if (imgSrc.startsWith('/logo.png')) {
      setImgSrc('/logo.jpg?v=3');
    } else if (imgSrc.startsWith('/logo.jpg')) {
      setImgSrc('/fish restau logo.jpg');
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Pure circular logo without artificial borders or extra elements */}
      <div className={`relative ${sizeMap[size]} rounded-full overflow-hidden bg-white shadow-sm shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105`}>
        {!hasError ? (
          <img
            src={imgSrc}
            alt="Sphere by Léa Restaurant Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <img
            src="/logo.png?v=3"
            alt="Sphere by Léa Restaurant Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};
