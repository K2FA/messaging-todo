import { cn } from '@/lib/utils';

interface TextLabelProps {
  label: string;
  className?: string;
}

export function TextLabel({ label, className }: TextLabelProps) {
  return <span className={cn('font-lato text-xs font-bold', className)}>{label}</span>;
}
