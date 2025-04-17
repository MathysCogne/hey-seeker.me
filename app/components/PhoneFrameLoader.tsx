import React from 'react';
import Image from 'next/image';

interface PhoneFrameLoaderProps {
  imageUrl: string;
  altText: string;
}

export function PhoneFrameLoader({ imageUrl, altText }: PhoneFrameLoaderProps) {
  return (
    <div className="relative mx-auto">
      {/* Phone frame */}
      <div className="relative w-64 h-[500px] rounded-[32px] bg-black border-4 border-gray-800 overflow-hidden shadow-lg">
        {/* Phone screen */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden">
          <Image 
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Phone elements */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-full"></div>
        <div className="absolute -right-1 top-24 w-1 h-10 bg-gray-800 rounded-l-md"></div>
        <div className="absolute -right-1 top-40 w-1 h-10 bg-gray-800 rounded-l-md"></div>
        <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-800 rounded-r-md"></div>
        
        {/* Shadow/reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 rounded-[28px] pointer-events-none"></div>
      </div>
      
      {/* Phone shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/20 blur-md rounded-full"></div>
    </div>
  );
} 