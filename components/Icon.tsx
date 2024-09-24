import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { GiNestedHexagons } from 'react-icons/gi';

interface IconProps {
  icon?: IconType;
  size?: 'sm' | 'lg';
  link?: string;
  imgSrc?: string;
}

const Icon = ({ icon: Icon, size = 'sm', link, imgSrc }: IconProps) => {
  const sizeMap = size === 'lg' ? 32 : 20; 
  const nestedHexagonSize = size === 'lg' ? 56 : 40; 

  const iconContent = (
    <div
      className={`relative flex-center border-2 ring-1 bg-sky-950 rounded-full overflow-hidden border-slate-950 ring-sky-800 ${
        size === 'lg' ? 'w-16 h-16' : 'w-12 h-12'
      } ${link ? 'cursor-pointer' : ''}`}
    >
      {Icon && <Icon size={sizeMap} className="z-10" />} 
      {imgSrc && <Image src={imgSrc} alt="logo" width={45} height={45} className="z-10" />}
      <GiNestedHexagons
        className="absolute z-0 text-sky-900"
        style={{ width: nestedHexagonSize, height: nestedHexagonSize }} 
      />
    </div>
  );

  return link ? <Link href={link}>{iconContent}</Link> : iconContent;
};

export default Icon;
