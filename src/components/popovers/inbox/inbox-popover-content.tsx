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
export function InboxPopOverContent() {
  const [chatListItems, setChatListItems] = useState<ChatListType | null>(null);
  const [conversations, setConversations] = useState<{ [key: number]: ConversationType } | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const loadChatList = async () => {
      try {
        const data = await fetchChatList();
        const conversationData = await fetchConversation();
        setChatListItems(data);
        setConversations(conversationData);

        timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching chat list:', error);
        setIsLoading(false);
      }
    };
    loadChatList();
    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(timer);
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

  const inbox = chatListItems?.inbox ?? [];
  const filtered = search
    ? inbox.filter((c) => {
        const q = search.toLowerCase();
        return (
          c.subject?.toLowerCase().includes(q) ||
          c.lastMessage.message.toLowerCase().includes(q) ||
          c.participants.some((p) => p.toLowerCase().includes(q))
        );
      })
    : inbox;

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
              <SearchInput
                search={search}
                setSearch={setSearch}
              />
            </div>

            <ChatListItemsButton
              chatListItems={filtered}
              onConversationSelect={setSelectedConversationId}
            />
          </form>
        </>
      )}
    </div>
  );
}
