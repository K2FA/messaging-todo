import { cn } from '@/lib/utils';
import type { HeadingProps } from '@/types/text-type';

export function HeadingTwo({ title, className }: HeadingProps) {
  return <h3 className={cn('font-lato text-sm font-bold text-start', className)}>{title}</h3>;
}
