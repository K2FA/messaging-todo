import { cn } from '@/lib/utils';

export function ChatNotificationBadge({ className }: { className?: string }) {
  return <span className={cn('w-2.5 h-2.5 bg-Red1 rounded-full inline-flex', className)}></span>;
}
