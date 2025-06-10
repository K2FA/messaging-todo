// Import required hooks and UI components
import type { ConversationType } from '@/types/chatlist-item';
import { useEffect, useRef, useState } from 'react';
import { MessageContent } from './message-content';
import { MessageHeaderProfile } from './message-header-profile';
import { MessageInput } from './message-input';

// Define prop types for the MessageView component
interface MessageViewProps {
  conversation?: ConversationType;
  onBackClick?: () => void;
}

/**
 * MessageView Component
 *
 * Displays a detailed view of a chat conversation, including header, messages, and input area.
 * Automatically scrolls to new or unread messages and shows a scroll-to-bottom button when needed.
 *
 * Props:
 * - conversation: ConversationType (optional) — The conversation object to be rendered.
 * - onBackClick: function (optional) — Callback for the back button (useful for mobile views).
 */
export function MessageView({ conversation, onBackClick }: MessageViewProps) {
  // Ref to the scrollable container to control scroll behavior
  const scrollRef = useRef<HTMLDivElement>(null);

  // Tracks whether the "scroll to bottom" button should be shown
  const [showScrollButton, setShowScrollButton] = useState(false);

  /**
   * Handles scroll events to determine if the user is at the bottom of the chat.
   * Updates visibility of the "scroll to bottom" button accordingly.
   */
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const atBottom = scrollHeight - scrollTop <= clientHeight + 50;

    setShowScrollButton(!atBottom);
  };

  /**
   * Smoothly scrolls the chat content to the bottom.
   * Used when the scroll-to-bottom button is clicked.
   */
  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  };

  /**
   * On conversation change (or mount), scroll to either the unread message separator
   * or the bottom of the conversation.
   */
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
      <div className='w-full h-full pb-[19px]'>
        {/* Chat header with title and back button */}
        <MessageHeaderProfile
          title={conversation?.title || ''}
          participants={conversation?.participants || []}
          onBackClick={onBackClick}
        />

        {/* Message body content with scroll tracking */}
        {conversation && (
          <MessageContent
            messages={conversation.messages}
            participants={conversation.participants}
            lastReadAt={conversation?.lastReadAt}
            scrollRef={scrollRef}
            onScroll={handleScroll}
          />
        )}

        {/* Input area and scroll-to-bottom button */}
        <MessageInput
          showScrollButton={showScrollButton}
          onScrollToBottom={scrollToBottom}
        />
      </div>
    </div>
  );
}
