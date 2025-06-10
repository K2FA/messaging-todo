import { cn } from '@/lib/utils';
import type { MessageType } from '@/types/chatlist-item';
import { TimeTwentyFourHour } from '@/utils/time-hour';
import { Ellipsis } from 'lucide-react';
import { EditDeleteContent } from '../popovers/inbox/edit-delete-content';
import { TextLabel } from '../text/label';
import { Paragraph } from '../text/paragraph';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface MessageBubbleProps {
  messageContent: MessageType;
  isGroupChat: boolean;
  participantColorMap: Record<string, { text: string; bg: string }>;
}

export function MessageBubble({ messageContent, isGroupChat, participantColorMap }: MessageBubbleProps) {
  const isCurrentUser = messageContent.sender.toLowerCase() === 'you';

  const timeMessage = TimeTwentyFourHour(messageContent.timestamp);

  const senderColor =
    isGroupChat && !isCurrentUser
      ? participantColorMap[messageContent.sender]?.text || 'text-Blue1'
      : isCurrentUser
      ? 'text-Purple2'
      : 'text-Blue1';

  const bubbleColor =
    isGroupChat && !isCurrentUser
      ? participantColorMap[messageContent.sender]?.bg || 'bg-Gray9'
      : isCurrentUser
      ? 'bg-Gray8'
      : 'bg-Gray9';

  return (
    <div className={cn('flex flex-col  gap-2', isCurrentUser ? 'items-end' : 'items-start')}>
      <TextLabel
        label={messageContent.sender}
        className={cn('3xl:text-base', senderColor)}
      />

      <div className={cn('flex gap-2', isCurrentUser ? 'flex-row' : 'flex-row-reverse')}>
        <Popover>
          <PopoverTrigger className='w-4 h-4 cursor-pointer'>
            <Ellipsis
              size={16}
              className='w-4 h-4'
            />
          </PopoverTrigger>
          <PopoverContent
            align={isCurrentUser ? 'start' : 'end'}
            className='w-[126px] text-start border border-solid border-Gray4 shadow-none bg-white rounded-[5px]'>
            <EditDeleteContent />
          </PopoverContent>
        </Popover>

        <div className={cn('flex flex-col gap-2 p-2.5 rounded-[5px] ', bubbleColor)}>
          <Paragraph
            text={messageContent.message}
            className='text-xs 3xl:text-sm'
          />

          <TextLabel
            label={timeMessage}
            className='text-Gray2 font-normal text-[10px] 3xl:text-xs'
          />
        </div>
      </div>
    </div>
  );
}
