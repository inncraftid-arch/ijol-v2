import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'dark' | 'outline';
};

const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5',
        variant === 'primary' && 'bg-gold text-white shadow-[0_12px_26px_rgba(201,149,71,0.35)] hover:bg-gold-soft',
        variant === 'dark' && 'bg-brown text-white shadow-[0_12px_26px_rgba(69,52,33,0.24)] hover:bg-brown-deep',
        variant === 'outline' && 'border border-line bg-white text-brown hover:border-gold hover:text-gold',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
