import type { ConversationType } from '@/types/chatlist-item';
import { MessageContent } from './message-content';
import { MessageHeaderProfile } from './message-header-profile';
import { MessageInput } from './message-input';

interface MessageViewProps {
  conversation?: ConversationType;
  onBackClick?: () => void;
}

export function MessageView({ conversation, onBackClick }: MessageViewProps) {
  console.log(conversation);

  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7'>
      <div className='w-full h-full pb-[19px] '>
        <MessageHeaderProfile
          title={conversation?.title || ''}
          participants={conversation?.participants || []}
          onBackClick={onBackClick}
        />

        <MessageContent />

        <MessageInput />
      </div>
    </div>
  );
}
