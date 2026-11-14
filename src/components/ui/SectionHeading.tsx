import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  theme?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  theme = 'light',
  align = 'left',
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <span className="h-[1px] w-6 bg-amberled-500" aria-hidden="true" />
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-amberled-500">
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          'font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.12]',
          isDark ? 'text-alabaster' : 'text-ink'
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'text-sm sm:text-base leading-relaxed pt-1',
            isDark ? 'text-ink-light' : 'text-ink-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
