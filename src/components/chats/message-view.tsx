import { Ellipsis } from 'lucide-react';
import { MessageHeaderProfile } from '../profiles/message-header-profile';
import { TextLabel } from '../text/label';
import { Paragraph } from '../text/paragraph';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

export function MessageView() {
  return (
    <div className='w-full h-full pb-[19px] overflow-hidden'>
      <MessageHeaderProfile />

      <ScrollArea className='h-[402.5px] 3xl:h-[567.5px] px-[19px]'>
        <div className='flex justify-end'>
          <div className='flex flex-col items-end gap-4'>
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
                  className='text-xs 3xl:text-base'
                />

                <TextLabel
                  label='19:32'
                  className='text-Gray2 font-normal text-[10px] 3xl:text-xs'
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className='w-full flex gap-[13px] px-5'>
        <Input
          placeholder='Type a new message'
          className='h-10 focus-visible:ring-0 focus-visible:outline-0 border border-solid border-Gray3 rounded-[5px] px-4 py-[13px] text-xs 3xl:text-base font-normal text-Gray2 font-lato'
        />

        <Button className='rounded-[5px] bg-Blue1 text-white font-normal text-xs w-[76px] h-10 flex justify-center items-center'>
          Send
        </Button>
      </div>
    </div>
  );
}
