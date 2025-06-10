// Import necessary UI components and hooks
import { ChatListItemsButton } from '@/components/buttons/inbox/chat-list-items-button';
import { SearchInput } from '@/components/input/search-input';
import { MessageView } from '@/components/messages/message-view';
import { fetchChatList } from '@/dummy-datas/chat-list-item';
import { fetchConversation } from '@/dummy-datas/conversation';
import type { ChatListType, ConversationType } from '@/types/chatlist-item';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { Loading } from '../../loaders/loading';

/**
 * InboxPopOverContent Component
 *
 * This component displays a popover containing a searchable list of chat conversations.
 * It shows a loading state while fetching data, and allows the user to view individual messages.
 *
 * State:
 * - chatListItems: Holds fetched chat list data.
 * - conversations: Holds detailed conversation data indexed by ID.
 * - selectedConversationId: Tracks which conversation is currently selected.
 * - isLoading: Toggles loading spinner during data fetching.
 * - search: Stores the current search input for filtering conversations.
 */
interface InboxPopOverContentProps {
  setActivePopover: Dispatch<SetStateAction<'task' | 'inbox' | null>>;
}

export function InboxPopOverContent({ setActivePopover }: InboxPopOverContentProps) {
  const [chatListItems, setChatListItems] = useState<ChatListType | null>(null);
  const [conversations, setConversations] = useState<{ [key: number]: ConversationType } | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  // Fetch chat list and conversation data on mount
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const loadChatList = async () => {
      try {
        // Simulate fetching data from an API or dummy source
        const data = await fetchChatList();
        const conversationData = await fetchConversation();
        setChatListItems(data);
        setConversations(conversationData);

        // Simulate a short delay before turning off loading
        timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching chat list:', error);
        setIsLoading(false);
      }
    };

    loadChatList();

    // Clear timeout on unmount to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  // If a conversation is selected, render the message view
  if (selectedConversationId !== null) {
    const selectedConversation = conversations?.[selectedConversationId];

    return (
      <MessageView
        conversation={selectedConversation}
        onBackClick={() => setSelectedConversationId(null)}
        setActivePopover={setActivePopover}
      />
    );
  }

  // Filter inbox chat list items based on search query
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

  // Render inbox UI with optional loading state and filtered chat list
  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[29px]'>
      {/* Show loading indicator if data is still being fetched */}
      {isLoading ? (
        <Loading label='Chats' />
      ) : (
        <>
          {/* Search input field */}
          <form className='w-full'>
            <div className='w-full h-8 flex items-center'>
              <SearchInput
                search={search}
                setSearch={setSearch}
              />
            </div>

            {/* Display filtered chat list items */}
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
