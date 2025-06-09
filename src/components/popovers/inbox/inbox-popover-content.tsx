import { ChatListItemsButton } from '@/components/buttons/inbox/chat-list-items-button';
import { SearchInput } from '@/components/input/search-input';
import { MessageView } from '@/components/messages/message-view';
import { fetchChatList } from '@/dummy-datas/chat-list-item';
import { fetchConversation } from '@/dummy-datas/conversation';
import type { ChatListType, ConversationType } from '@/types/chatlist-item';
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
export function InboxPopOverContent({ isLoading }: { isLoading?: boolean }) {
  const [chatListItems, setChatListItems] = useState<ChatListType | null>(null);
  const [conversations, setConversations] = useState<{ [key: number]: ConversationType } | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);

  useEffect(() => {
    const loadChatList = async () => {
      try {
        const data = await fetchChatList();
        const conversationData = await fetchConversation();
        setChatListItems(data);
        setConversations(conversationData);
      } catch (error) {
        console.error('Error fetching chat list:', error);
      }
    };
    loadChatList();
  }, []);

  if (selectedConversationId !== null) {
    const selectedConversation = conversations?.[selectedConversationId];

    return (
      <MessageView
        conversation={selectedConversation}
        onBackClick={() => setSelectedConversationId(null)}
      />
    );
  }

  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[29px]'>
      {/* Conditionally show loading state or inbox content */}
      {isLoading ? (
        <Loading label='Chats' />
      ) : (
        <>
          {/* Search input with icon */}
          <form className='w-full '>
            <div className='w-full h-8 flex items-center'>
              <SearchInput />
            </div>

            <ChatListItemsButton
              chatListItems={chatListItems?.inbox}
              onConversationSelect={setSelectedConversationId}
            />
          </form>
        </>
      )}
    </div>
  );
}
