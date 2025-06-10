import type { MessageType } from '@/types/chatlist-item';
import { getColorByName } from '@/utils/get-color';
import { groupMessagesWithSeparators } from '@/utils/group-messsage-with-separator';
import { ArrowDown } from 'lucide-react';
import type { RefObject } from 'react';
import { MessageBubble } from './message-bubble';
import { MessageDateInformation } from './message-date-information';

interface MessageContentProps {
  messages: MessageType[];
  participants: string[];
  lastReadAt?: Date;
  scrollRef?: RefObject<HTMLDivElement | null>;
  onScroll?: () => void;
}

export function MessageContent({ messages, participants, lastReadAt, onScroll, scrollRef }: MessageContentProps) {
  const isGroupChat = participants.length > 2;

  const participantColorMap = Object.fromEntries(participants.map((p) => [p, getColorByName(p)]));

  const groupedMessages = groupMessagesWithSeparators(messages, lastReadAt);

  return (
    <div
      onScroll={onScroll}
      ref={scrollRef}
      className='h-[402.5px] 3xl:h-[567.5px] flex-1 overflow-y-auto pb-[11px] px-5'>
      <div className='flex flex-col gap-2.5 pt-[13px] relative'>
        {groupedMessages.map((message, index) => {
          if (message.type === 'message') {
            return (
              <MessageBubble
                key={index}
                messageContent={message.data}
                isGroupChat={isGroupChat}
                participantColorMap={participantColorMap}
              />
            );
          }

          if (message.type === 'date') {
            return <MessageDateInformation key={index}>{message.date}</MessageDateInformation>;
          }

          if (message.type === 'new') {
            return (
              <MessageDateInformation
                key={index}
                className='text-Red1 new-message-separator'>
                New Message{' '}
                <ArrowDown
                  size={14}
                  className='text-Gray6'
                />{' '}
              </MessageDateInformation>
            );
          }
        })}
      </div>

      {/* <ScrollBar orientation='vertical' /> */}
    </div>
  );
}
