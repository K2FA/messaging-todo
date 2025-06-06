import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

export function NewMessageNotification() {
  return (
    <div className='w-full flex justify-center absolute -top-11 left-1/2 -translate-x-1/2'>
      <Button className='w-[142px] h-[34px] bg-[#E9F3FF] text-Blue1 flex items-center justify-center gap-[7.23px] cursor-pointer font-lato text-sm font-bold rounded-[5px]'>
        New Message
        <ArrowDown
          size={14}
          className='text-Gray6'
        />
      </Button>
    </div>
  );
}
