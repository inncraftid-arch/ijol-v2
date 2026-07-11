import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SegmentedControlOption<T extends string> = {
  value: T;
  label: ReactNode;
};

type SegmentedControlProps<T extends string> = {
  value: T;
  options: readonly SegmentedControlOption<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
  className?: string;
  optionClassName?: string;
};

const SegmentedControl = <T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  className,
  optionClassName,
}: SegmentedControlProps<T>) => {
  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );

  return (
    <div
      className={cn('relative grid rounded-full bg-sand p-1 text-sm font-bold text-brown', className)}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
      role="group"
      aria-label={ariaLabel}
    >
      <span
        className="pointer-events-none absolute bottom-1 left-1 top-1 rounded-full bg-brown shadow-sm transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 0.5rem) / ${options.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
        aria-hidden="true"
      />

      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              'relative z-10 min-h-9 rounded-full px-4 transition-colors',
              isActive ? 'text-white' : 'hover:text-gold',
              optionClassName,
            )}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
