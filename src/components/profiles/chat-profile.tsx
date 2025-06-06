import personGrayStroke from '@/assets/icons/person.png';
import personWhiteStroke from '@/assets/icons/person_white.png';

export function ChatProfile() {
  return (
    <div className='w-fit relative flex'>
      <div className='w-[34px] h-[34px] relative p-2 bg-Gray5 rounded-full'>
        <img
          src={personGrayStroke}
          alt=''
          className='w-[18px] h-[18px]'
        />
      </div>
      <div className='w-[34px] h-[34px] relative -left-[17px] z-10 p-2 bg-Blue1 rounded-full'>
        <img
          src={personWhiteStroke}
          alt=''
          className='w-[18px] h-[18px]'
        />
      </div>
    </div>
  );
}
