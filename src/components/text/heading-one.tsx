import { cn } from '@/lib/utils';
import type { HeadingProps } from '@/types/text-type';

export function HeadingOne({ title, className }: HeadingProps) {
  return <h1 className={cn('font-lato text-base font-bold text-Gray2 leading-1 text-start', className)}>{title}</h1>;
}
