import { GroupAvatar } from '@/components/avatar/group-avatar';
import { PersonalAvatar } from '@/components/avatar/personal-avatar';
import { ChatListText } from '@/components/text/inbox/chat-list-text';
import type { ChatListItemsProps } from '@/types/chatlist-item';
import { ChatNotificationBadge } from '../../badges/chat-notification-badge';
import { Button } from '../../ui/button';

export function ChatListItemsButton({
  chatListItems,
  onConversationSelect,
}: ChatListItemsProps & { onConversationSelect: (id: number) => void }) {
  return (
    <>
      {chatListItems?.map((listItem, index) => (
        <div
          key={index}
          className='py-[22px] border-b border-solid border-Gray3'>
          <Button
            type='button'
            onClick={() => onConversationSelect(listItem.id)}
            className='w-full cursor-pointer flex relative '>
            {listItem.type === 'personal' ? <PersonalAvatar listItem={listItem} /> : <GroupAvatar />}

            <ChatListText chatList={listItem} />

            <div className='flex items-center'>{listItem.unread === true && <ChatNotificationBadge />}</div>
          </Button>
        </div>
      ))}
    </>
  );
}
