import { ChatListText } from '@/components/text/inbox/chat-list-text';
import { ChatNotificationBadge } from '../../badges/chat-notification-badge';
import { ChatProfile } from '../../profiles/chat-profile';
import { Button } from '../../ui/button';

export function ChatListItemsButton() {
  return (
    <Button className='w-full cursor-pointer flex relative '>
      <ChatProfile />

      <ChatListText />

      <div className='flex items-center'>
        <ChatNotificationBadge />
      </div>
    </Button>
  );
}
