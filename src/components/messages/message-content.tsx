import { ArrowDown } from 'lucide-react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { MessageBubble } from './message-bubble';
import { MessageDateInformation } from './message-date-information';

export function MessageContent() {
  return (
    <ScrollArea className='h-[402.5px] 3xl:h-[567.5px] flex-1 overflow-y-auto pb-[11px] px-5'>
      <div className='flex flex-col gap-2.5 pt-[13px] relative'>
        <MessageBubble />

        <MessageDateInformation>Today January 09, 2021</MessageDateInformation>

        <MessageBubble />

        <MessageDateInformation className='text-Red1'>
          New Message{' '}
          <ArrowDown
            size={14}
            className='text-Gray6'
          />{' '}
        </MessageDateInformation>
      </div>

      <ScrollBar orientation='vertical' />
    </ScrollArea>
  );
}
