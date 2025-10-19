"use client";

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className = '' 
}) => {
  const [imageError, setImageError] = useState(false); // Try to load image first
  
  // Size configurations
  const sizeConfig = {
    xs: { width: 80, height: 24 },
    sm: { width: 100, height: 32 },
    md: { width: 150, height: 48 },
    lg: { width: 200, height: 64 }
  };
  
  const { width, height } = sizeConfig[size];
  
  // Logo paths - will check for SVG first, then PNG
  const logoPath = variant === 'white' ? '/images/logo/logo-white' : '/images/logo/logo';
  
  // Use text logo with website's green theme
  if (imageError) {
    return (
      <div className={`flex items-center ${className}`}>
        <div className={`bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mr-2 shadow-lg ${
          size === 'xs' ? 'w-6 h-6' : size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-11 h-11' : 'w-14 h-14'
        }`}>
          <span className={`text-yellow-300 font-bold ${
            size === 'xs' ? 'text-xs' : size === 'sm' ? 'text-sm' : size === 'md' ? 'text-xl' : 'text-2xl'
          }`}>R</span>
        </div>
        <span className={`font-bold ${
          variant === 'white' 
            ? 'text-white' 
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
        } ${
          size === 'xs' ? 'text-sm' : size === 'sm' ? 'text-lg' : size === 'md' ? 'text-2xl' : 'text-3xl'
        }`}>
          RAMIXIT PRIVATE LIMITED
        </span>
      </div>
    );
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={`${logoPath}.png`}
        alt="RAMIXIT PRIVATE LIMITED Logo"
        width={width}
        height={height}
        priority
        onError={() => setImageError(true)}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;