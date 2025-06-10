// Import avatar, text, badge, and UI components
import { GroupAvatar } from '@/components/avatar/group-avatar';
import { PersonalAvatar } from '@/components/avatar/personal-avatar';
import { ChatListText } from '@/components/text/inbox/chat-list-text';
import type { ChatListItemsProps } from '@/types/chatlist-item';
import { ChatNotificationBadge } from '../../badges/chat-notification-badge';
import { Button } from '../../ui/button';

/**
 * ChatListItemsButton Component
 *
 * Renders a list of chat items as clickable buttons. Each item can be of type 'personal' or 'group',
 * and clicking on an item will trigger the `onConversationSelect` callback with the item's ID.
 * Displays avatar, chat text summary, and optionally a notification badge for unread messages.
 *
 * Props:
 * - chatListItems: Array of chat list data to be rendered.
 * - onConversationSelect: Function to call with the ID of the selected conversation.
 */
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
            className='w-full cursor-pointer flex relative'>
            {/* Conditionally render avatar based on conversation type */}
            {listItem.type === 'personal' ? <PersonalAvatar listItem={listItem} /> : <GroupAvatar />}

            {/* Display chat preview text: subject, message snippet, etc. */}
            <ChatListText chatList={listItem} />

            {/* Show notification badge if chat has unread messages */}
            <div className='flex items-center'>{listItem.unread === true && <ChatNotificationBadge />}</div>
          </Button>
        </div>
      ))}
    </>
  );
}
