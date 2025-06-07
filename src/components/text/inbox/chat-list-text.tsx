import type { ChatListItemsType } from '@/types/chatlist-item';
import { format } from 'date-fns';
import { HeadingOne } from '../heading-one';
import { HeadingTwo } from '../heading-two';
import { Paragraph } from '../paragraph';

export function ChatListText({ chatList }: { chatList: ChatListItemsType }) {
  const formattedData = format(new Date(chatList.timestamp), 'MM/dd/yyyy HH:mm');

  return (
    <div className='w-full pb-2'>
      <div className='w-full flex gap-3 items-center'>
        <HeadingOne
          title={chatList.subject || ''}
          className='text-Blue1 text-sm max-w-[310px] 3xl:max-w-[446px]'
        />

        <HeadingOne
          title={formattedData}
          className='font-normal text-xs 3xl:text-sm'
        />
      </div>

      <div className='max-w-[337px] 3xl:max-w-[450px] pt-1 overflow-hidden whitespace-nowrap text-ellipsis'>
        <HeadingTwo
          title={chatList.lastMessage.sender}
          className='text-Gray2 leading-4 text-xs'
        />

        <Paragraph
          text={chatList.lastMessage.message}
          className='w-full leading-4 text-xs overflow-hidden text-ellipsis'
        />
      </div>
    </div>
  );
}
