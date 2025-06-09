import type { ChatListItemsType } from '@/types/chatlist-item';

export function PersonalAvatar({ listItem }: { listItem: ChatListItemsType }) {
  const firstChar = listItem.subject?.charAt(0);

  return (
    <div className='w-[68px] flex justify-center me-2'>
      <div className='w-[34px] h-[34px] bg-Blue1 rounded-full font-lato text-sm font-bold text-white flex justify-center items-center '>
        {firstChar}
      </div>
    </div>
  );
}
