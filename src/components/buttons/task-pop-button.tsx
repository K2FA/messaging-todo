import chromeReader from '@/assets/icons/chrome_reader_mode.png';
import chromeReaderWhite from '@/assets/icons/chrome_reader_mode_white.png';
import { cn } from '@/lib/utils';
import type { PopOverProps } from '@/types/popover-type';
import { TaskPopOverContent } from '../popovers/task-popover-content';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

/**
 * TaskPopButton Component
 *
 * This component renders a button that toggles the Task popover.
 * It adjusts its appearance and position based on the `isOpen` and `activePopover` states.
 * When clicked, it triggers a floating panel (Popover) showing the Task-related content.
 *
 * Props (via PopOverProps):
 * - isOpen: Determines whether the entire quick-access section is expanded.
 * - activePopover: Indicates which popover is currently active ('task', 'inbox', or null).
 * - setActivePopover: Function to toggle the active popover.
 * - isLoading: Indicates whether the Task popover content is still loading.
 */
export function TaskPopButton({ isOpen, activePopover, setActivePopover, isLoading = true }: PopOverProps) {
  const isActive = activePopover === 'task';

  return (
    <div
      className={cn(
        'relative transition ease-out duration-300',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[176px] opacity-0',
        isActive && 'translate-x-[176px] z-50',
        activePopover === 'inbox' && 'translate-x-[86px]',
      )}>
      {/* Floating label above the button */}
      <span
        className={cn(
          'absolute -top-9 left-1/2 -translate-x-1/2 text-Gray6 select-none font-lato text-sm transition ease-out duration-300',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0',
          activePopover && 'hidden',
        )}>
        Task
      </span>

      {/* Popover trigger and content for Task */}
      <Popover
        open={isActive}
        onOpenChange={(open) => setActivePopover(open ? 'task' : null)}>
        <PopoverTrigger
          className={cn(
            'pop-button select-none rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer z-40',
            isActive ? 'bg-Orange1 w-[68px] h-[68px]' : 'bg-Gray6',
          )}>
          <img
            src={isActive ? chromeReaderWhite : chromeReader}
            alt='chrome-reader'
          />
        </PopoverTrigger>

        <PopoverContent className='w-[550px] h-[553px] 3xl:w-[734px] 3xl:h-[737px] border-0 mb-[15px]'>
          <TaskPopOverContent isLoading={isLoading} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
