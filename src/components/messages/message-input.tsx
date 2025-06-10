// Import UI components and the new message notification component
import { NewMessageNotification } from '../notifications/new-message-notification';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// Define the props accepted by MessageInput
interface MessageInputProps {
  showScrollButton?: boolean;
  onScrollToBottom?: () => void;
}

/**
 * MessageInput Component
 *
 * Renders the input area for sending new messages.
 * Optionally displays a floating "new message" notification button that scrolls to the latest message.
 *
 * Props:
 * - showScrollButton?: boolean — If true, displays a "new message" scroll-to-bottom button.
 * - onScrollToBottom?: () => void — Callback to scroll the message list to the bottom.
 */
export function MessageInput({ showScrollButton, onScrollToBottom }: MessageInputProps) {
  return (
    <form className='w-full flex gap-[13px] px-5 relative'>
      {/* Conditionally show the floating "new message" notification button */}
      {showScrollButton && <NewMessageNotification handleOnClick={onScrollToBottom} />}

      {/* Text input for typing a new message */}
      <Input
        placeholder='Type a new message'
        className='h-10 focus-visible:ring-0 focus-visible:outline-0 border border-solid border-Gray3 rounded-[5px] px-4 py-[13px] text-xs 3xl:text-sm font-normal text-Gray2 font-lato'
      />

      {/* Submit/send button — UI only, no submit logic currently wired */}
      <Button className='rounded-[5px] bg-Blue1 text-white font-normal text-xs 3xl:text-sm w-[76px] h-10 flex justify-center items-center cursor-pointer hover:scale-105 transition ease-out duration-200'>
        Send
      </Button>
    </form>
  );
}
