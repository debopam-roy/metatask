import { ImgHTMLAttributes } from 'react';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '', ...props }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      className={className}
      {...props}
    />
  );
} 