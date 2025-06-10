// Import types, utilities, and message components
import type { MessageType } from '@/types/chatlist-item';
import { getColorByName } from '@/utils/get-color';
import { groupMessagesWithSeparators } from '@/utils/group-messsage-with-separator';
import { ArrowDown } from 'lucide-react';
import type { RefObject } from 'react';
import { MessageBubble } from './message-bubble';
import { MessageDateInformation } from './message-date-information';

// Define the props expected by the MessageContent component
interface MessageContentProps {
  messages: MessageType[];
  participants: string[];
  lastReadAt?: Date;
  scrollRef?: RefObject<HTMLDivElement | null>;
  onScroll?: () => void;
}

/**
 * MessageContent Component
 *
 * Displays a scrollable list of chat messages with support for:
 * - Group chat highlighting by assigning colors to participants
 * - Visual grouping by date
 * - "New message" separator after lastReadAt
 *
 * Props:
 * - messages: MessageType[] — List of messages in the conversation.
 * - participants: string[] — List of participant names.
 * - lastReadAt?: Date — Timestamp indicating the last read message.
 * - scrollRef?: RefObject — A ref used to control scroll position externally.
 * - onScroll?: () => void — Callback for scroll events, useful for showing scroll-to-bottom buttons.
 */
export function MessageContent({ messages, participants, lastReadAt, onScroll, scrollRef }: MessageContentProps) {
  // Detect if it's a group chat based on participant count
  const isGroupChat = participants.length > 2;

  // Create a color map for each participant
  const participantColorMap = Object.fromEntries(participants.map((p) => [p, getColorByName(p)]));

  // Group messages by date and inject a "New Message" separator after lastReadAt
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
    </div>
  );
}
