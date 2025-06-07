import { ChatListItemsButton } from '@/components/buttons/inbox/chat-list-items-button';
import { SearchInput } from '@/components/input/search-input';
import { fetchChatlist } from '@/fetcher/chatlist';
import type { ChatListType } from '@/types/chatlist-item';
import { useEffect, useState } from 'react';
import { Loading } from '../../loaders/loading';

/**
 * InboxPopOverContent Component
 *
 * This component represents the content inside the Inbox popover panel.
 * It includes a search input and conditionally shows a loading indicator.
 *
 * Props:
 * - isLoading: boolean – Determines whether to display the loading spinner or actual content.
 */
export function InboxPopOverContent() {
  const [chatListItems, setChatListItems] = useState<ChatListType | null>(null);
  // Indicates loading state while popover content is being fetched/rendered
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadChatList = async () => {
      const data = await fetchChatlist();
      setChatListItems(data);
      setIsLoading(false);
    };
    loadChatList();
  }, []);

  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[29px]'>
      {/* Search input with icon */}
      <form className='w-full h-8 flex items-center'>
        <SearchInput />
      </form>

      {/* Conditionally show loading state or inbox content */}
      {isLoading ? (
        <Loading label='Chats' />
      ) : (
        <ChatListItemsButton chatListItems={chatListItems?.inbox} />

        // <MessageView />
      )}
    </div>
  );
}
