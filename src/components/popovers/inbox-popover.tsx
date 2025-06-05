import { Search } from 'lucide-react';
import { Loading } from '../loaders/loading';
import { Input } from '../ui/input';

export function InboxPopOver() {
  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[34px]'>
      <div className='w-full h-8 flex items-center '>
        <Input
          placeholder='Search'
          className=' h-full py-0 pe-0 border border-r-0 border-solid border-Gray3 text-Gray1 rounded-[5px] rounded-r-none ps-[58.82px] focus-visible:outline-none focus-visible:ring-0 text-xs font-lato'
        />
        <div className='w-[58.82px] h-full rounded-r-[5px] border border-l-0 border-solid border-Gray3'>
          <Search
            size={12}
            className='h-full '
          />
        </div>
      </div>

      <Loading label='Chats' />
    </div>
  );
}
