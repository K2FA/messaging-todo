// Import utility function, icons, and UI/text components
import { cn } from '@/lib/utils';
import { ArrowLeft, X } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { HeadingOne } from '../text/heading-one';
import { HeadingTwo } from '../text/heading-two';
import { Button } from '../ui/button';

// Define props for the MessageHeaderProfile component
interface MessageHeaderProfileProps {
  title: string;
  participants: string[];
  onBackClick?: () => void;
  setActivePopover: Dispatch<SetStateAction<'task' | 'inbox' | null>>;
}

/**
 * MessageHeaderProfile Component
 *
 * Displays the header section for a message view, including the conversation title,
 * participant count, a back button (typically for mobile or popover navigation),
 * and a close button (purely visual in this implementation).
 *
 * Props:
 * - title: string — Title of the conversation (e.g., chat or group name).
 * - participants: string[] — List of participant names or IDs.
 * - onBackClick?: () => void — Optional callback triggered when the back button is clicked.
 */
export function MessageHeaderProfile({
  title,
  participants,
  onBackClick,
  setActivePopover,
}: MessageHeaderProfileProps) {
  // Determine if this is a 1-on-1 conversation (used to conditionally show participant count)
  const isGroupChat = participants.length <= 2;

  return (
    <div className='w-full flex items-center gap-[14px] py-[19px] px-[29px] border-b border-solid border-Gray4'>
      {/* Back button (left arrow icon) for navigation, triggers onBackClick if provided */}
      <Button
        onClick={onBackClick}
        className='w-6 h-6 cursor-pointer'>
        <ArrowLeft
          size={24}
          className='w-6 h-6'
        />
      </Button>

      {/* Chat title and optional participant count display */}
      <Button className='w-full flex flex-col gap-[9.36px] cursor-pointer'>
        <HeadingOne
          title={title || ''}
          className='text-base text-Blue1'
        />

        {/* Show participant count only for group chats */}
        <HeadingTwo
          title={`${participants?.length} Participants`}
          className={cn('text-xs font-normal', isGroupChat ? 'hidden' : 'block')}
        />
      </Button>

      {/* Close button (X icon) for UI symmetry or potential future use */}
      <Button
        onClick={() => setActivePopover(null)}
        className='w-6 h-6 cursor-pointer hover:-rotate-12 transition ease-out duration-200'>
        <X
          size={24}
          className='w-6 h-6'
        />
      </Button>
    </div>
  );
}
