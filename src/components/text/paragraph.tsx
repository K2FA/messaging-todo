import { cn } from '@/lib/utils';

interface ParagraphProps {
  text: string;
  className?: string;
}

export function Paragraph({ text, className }: ParagraphProps) {
  return <p className={cn('font-lato text-sm font-normal text-Gray2 text-start', className)}>{text}</p>;
}
