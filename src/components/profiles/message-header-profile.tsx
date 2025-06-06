import { ArrowLeft, X } from 'lucide-react';
import { HeadingOne } from '../text/heading-one';
import { HeadingTwo } from '../text/heading-two';
import { Button } from '../ui/button';

export function MessageHeaderProfile() {
  return (
    <div className='w-full flex items-center gap-[14px] py-[19px] px-[29px] border-b border-solid border-Gray4'>
      <Button className='w-6 h-6 cursor-pointer'>
        <ArrowLeft
          size={24}
          className='w-6 h-6'
        />
      </Button>

      <Button className='w-full flex flex-col gap-[9.36px] cursor-pointer'>
        <HeadingOne
          title='109220-Naturalization'
          className='text-base text-Blue1'
        />

        <HeadingTwo
          title='3 Participants'
          className='text-xs font-normal'
        />
      </Button>

      <Button className='w-6 h-6 cursor-pointer'>
        <X
          size={24}
          className='w-6 h-6'
        />
      </Button>
    </div>
  );
}
