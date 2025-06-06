import { MessageView } from '@/components/chats/message-view';
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
export function InboxPopOverContent({ isLoading }: { isLoading: boolean }) {
  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py- px-'>
      {/* Search input with icon */}
      {/* <form className='w-full h-8 flex items-center'>
        <SearchInput />
      </form> */}

      {/* Conditionally show loading state or inbox content */}
      {isLoading ? (
        <Loading label='Chats' />
      ) : (
        // <div className='py-[22px] border-b border-solid border-Gray3'>
        //   <ChatListItemsButton />

        // </div>
        <MessageView />
      )}
    </div>
  );
}
