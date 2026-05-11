import { Crosshair } from 'lucide-react';
import { cn } from '@/lib/cn';

interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandMark({ className, showWordmark = true }: BrandMarkProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative grid h-9 w-9 place-items-center rounded-md bg-bg-raised border border-accent-cyan/40 shadow-glow">
        <Crosshair className="h-5 w-5 text-accent-cyan" aria-hidden />
        <span className="absolute inset-0 rounded-md ring-1 ring-accent-cyan/20 animate-pulseDot" aria-hidden />
      </div>
      {showWordmark ? (
        <div className="leading-none">
          <div className="font-semibold tracking-tight text-text-primary">Open Claw</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim">
            Mission Control
          </div>
        </div>
      ) : null}
    </div>
  );
}
