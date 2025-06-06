import { Ellipsis } from 'lucide-react';
import { TextLabel } from '../text/label';
import { Paragraph } from '../text/paragraph';
import { Button } from '../ui/button';

export function MessageBubble() {
  return (
    <div className='flex flex-col items-end gap-2'>
      <TextLabel
        label='You'
        className='text-Purple2 3xl:text-base'
      />

      <div className='flex gap-2'>
        <Button className='w-4 h-4 cursor-pointer'>
          <Ellipsis
            size={16}
            className='w-4 h-4'
          />
        </Button>

        <div className='flex flex-col gap-2 p-2.5 rounded-[5px] bg-Gray8'>
          <Paragraph
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            className='text-xs 3xl:text-sm'
          />

          <TextLabel
            label='19:32'
            className='text-Gray2 font-normal text-[10px] 3xl:text-xs'
          />
        </div>
      </div>
    </div>
  );
}
