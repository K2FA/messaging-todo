import { NewMessageNotification } from '../notifications/new-message-notification';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface MessageInputProps {
  showScrollButton?: boolean;
  onScrollToBottom?: () => void;
}

export function MessageInput({ showScrollButton, onScrollToBottom }: MessageInputProps) {
  return (
    <form className='w-full flex gap-[13px] px-5 relative'>
      {showScrollButton && <NewMessageNotification handleOnClick={onScrollToBottom} />}

      <Input
        placeholder='Type a new message'
        className='h-10 focus-visible:ring-0 focus-visible:outline-0 border border-solid border-Gray3 rounded-[5px] px-4 py-[13px] text-xs 3xl:text-sm font-normal text-Gray2 font-lato'
      />

      <Button className='rounded-[5px] bg-Blue1 text-white font-normal text-xs 3xl:text-sm w-[76px] h-10 flex justify-center items-center cursor-pointer hover:scale-105 transition ease-out duration-200'>
        Send
      </Button>
    </form>
  );
}
