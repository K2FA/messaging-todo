import type { ConversationType } from '@/types/chatlist-item';
import { useEffect, useRef, useState } from 'react';
import { MessageContent } from './message-content';
import { MessageHeaderProfile } from './message-header-profile';
import { MessageInput } from './message-input';

interface MessageViewProps {
  conversation?: ConversationType;
  onBackClick?: () => void;
}

export function MessageView({ conversation, onBackClick }: MessageViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const atBottom = scrollHeight - scrollTop <= clientHeight + 50;

    setShowScrollButton(!atBottom);
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    requestAnimationFrame(() => {
      const container = scrollRef.current!;
      const newSep = container.querySelector<HTMLElement>('.new-message-separator');

      if (newSep) {
        const offset = newSep.offsetTop - container.clientHeight / 2;
        container.scrollTo({ top: offset, behavior: 'auto' });
      } else {
        container.scrollTo({ top: container.scrollHeight, behavior: 'auto' });
      }
    });
  }, [conversation?.id]);

  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7'>
      <div className='w-full h-full pb-[19px] '>
        <MessageHeaderProfile
          title={conversation?.title || ''}
          participants={conversation?.participants || []}
          onBackClick={onBackClick}
        />

        {conversation && (
          <MessageContent
            messages={conversation.messages}
            participants={conversation.participants}
            lastReadAt={conversation?.lastReadAt}
            scrollRef={scrollRef}
            onScroll={handleScroll}
          />
        )}

        <MessageInput
          showScrollButton={showScrollButton}
          onScrollToBottom={scrollToBottom}
        />
      </div>
    </div>
  );
}
