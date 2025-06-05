import cloudIcon from '@/assets/icons/cloud-lightning.png';
import { TaskInboxButton } from '@/components/buttons/task-inbox-button';

import { Button } from '@/components/ui/button';

export interface OpenQuickTabSectionProps {
  handleOnclick?: () => void;
  isOpen: boolean;
}

export function OpenQuickTabSection({ handleOnclick, isOpen }: OpenQuickTabSectionProps) {
  return (
    <div className='flex flex-row-reverse items-center fixed bottom-[27px] right-[34px] gap-[26px] z-50'>
      <Button
        type='button'
        onClick={handleOnclick}
        className='pop-button select-none bg-Blue1 rounded-full w-[68px] h-[68px] flex justify-center items-center cursor-pointer z-50'>
        <img
          src={cloudIcon}
          alt='cloud-lightning'
        />
      </Button>

      <TaskInboxButton isOpen={isOpen} />
    </div>
  );
}
