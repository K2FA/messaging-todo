import { Search } from 'lucide-react';
import { Input } from '../ui/input';

export function Navbar() {
  return (
    <div className='w-full h-[58px] flex items-center bg-Gray2 px-[25.5px] gap-4'>
      <Search
        size={16}
        className='w-4 h-4 text-Gray6'
      />
      <Input className='focus-visible:outline-none focus:outline-none focus-visible:ring-0 border-0 font-lato text-Gray6' />
    </div>
  );
}
