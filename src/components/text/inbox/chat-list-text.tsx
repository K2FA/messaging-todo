import { HeadingOne } from '../heading-one';
import { HeadingTwo } from '../heading-two';
import { Paragraph } from '../paragraph';

export function ChatListText() {
  return (
    <div className='w-full pb-2'>
      <div className='flex gap-4'>
        <HeadingOne
          title='109220-Naturalization'
          className='text-Blue1 text-sm'
        />

        <HeadingOne
          title='January 1, 2021 19:10'
          className='font-normal text-sm'
        />
      </div>

      <div className='w-full pt-1'>
        <HeadingTwo
          title='Cameron Phillips :'
          className='text-Gray2 leading-4 text-xs'
        />

        <Paragraph
          text='Please check this out!'
          className='leading-4 text-xs'
        />
      </div>
    </div>
  );
}
