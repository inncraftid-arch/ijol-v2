import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('mx-auto w-full max-w-(--width-container) px-5 sm:px-8', className)}>{children}</div>;
};

export default Container;
