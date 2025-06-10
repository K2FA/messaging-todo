import { Button } from '@/components/ui/button';

export function EditDeleteContent() {
  return (
    <div className='w-full rounded-[5px] '>
      <Button className='w-full py-3 px-[18px] text-xs font-medium font-lato text-start cursor-pointer border-b border-solid border-Gray4 text-Blue1 hover:bg-Gray9'>
        Edit
      </Button>
      <Button className='w-full py-3 px-[18px] text-xs font-medium font-lato text-start cursor-pointer text-Red1 hover:bg-Gray9'>
        Delete
      </Button>
    </div>
  );
}
