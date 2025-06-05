import { Search } from 'lucide-react';
import { Loading } from '../loaders/loading';
import { Input } from '../ui/input';

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
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[34px]'>
      {/* Search input with icon */}
      <div className='w-full h-8 flex items-center'>
        {/* Input field for search queries */}
        <Input
          placeholder='Search'
          className='h-full py-0 pe-0 border border-r-0 border-solid border-Gray3 text-Gray1 rounded-[5px] rounded-r-none ps-[58.82px] focus-visible:outline-none focus-visible:ring-0 text-xs font-lato'
        />

        {/* Search icon container */}
        <div className='w-[58.82px] h-full rounded-r-[5px] border border-l-0 border-solid border-Gray3'>
          <Search
            size={12}
            className='h-full'
          />
        </div>
      </div>

      {/* Conditionally show loading state or inbox content */}
      {isLoading ? <Loading label='Chats' /> : <div></div>}
    </div>
  );
}
