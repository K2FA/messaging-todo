import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function SearchInput() {
  return (
    <>
      {/* Input field for search queries */}
      <Input
        placeholder='Search'
        className='w-[425.58px] 3xl:w-[609.18px] h-full py-0 pe-0 border border-r-0 border-solid border-Gray3 text-Gray1 rounded-[5px] rounded-r-none !ps-[58.82px] py-2.5 focus-visible:outline-none focus-visible:ring-0 text-xs font-lato'
      />

      {/* Search icon container */}
      <Button
        type='submit'
        className='!w-[58.82px] h-full rounded-r-[5px] border border-l-0 border-solid border-Gray3 cursor-pointer'>
        <Search
          size={12}
          className='h-full'
        />
      </Button>
    </>
  );
}
