import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  centered?: boolean;
  variant?: 'dark' | 'light';
};

export function EditorialEyebrow({
  children,
  centered = false,
  variant = 'dark',
}: Props) {
  const lineClass = variant === 'dark' ? 'bg-brand-cta' : 'bg-white/70';
  const textClass = variant === 'dark' ? 'text-brand-cta' : 'text-white/80';

  return (
    <div
      className={`${centered ? 'inline-flex' : 'flex'} items-center gap-3`}
    >
      <span className={`w-12 h-px ${lineClass}`} />
      <p
        className={`text-xs uppercase tracking-[0.3em] ${textClass} font-bold`}
      >
        {children}
      </p>
      {centered && <span className={`w-12 h-px ${lineClass}`} />}
    </div>
  );
}
