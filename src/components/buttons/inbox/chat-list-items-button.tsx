import { ChatListText } from '@/components/text/inbox/chat-list-text';
import type { ChatListItemsProps } from '@/types/chatlist-item';
import { ChatNotificationBadge } from '../../badges/chat-notification-badge';
import { ChatProfile } from '../../profiles/chat-profile';
import { Button } from '../../ui/button';

export function ChatListItemsButton({ chatListItems }: ChatListItemsProps) {
  return (
    <>
      {chatListItems?.map((listItem, index) => (
        <div
          key={index}
          className='py-[22px] border-b border-solid border-Gray3'>
          <Button className='w-full cursor-pointer flex relative '>
            <ChatProfile />

            <ChatListText chatList={listItem} />

            <div className='flex items-center'>{listItem.unread === true && <ChatNotificationBadge />}</div>
          </Button>
        </div>
      ))}
    </>
  );
}
