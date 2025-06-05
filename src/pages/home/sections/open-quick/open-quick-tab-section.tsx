import cloudIcon from '@/assets/icons/cloud-lightning.png';
import { TaskInboxButton } from '@/components/buttons/task-inbox-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { PopOverProps } from '@/types/popover-type';

/**
 * OpenQuickTabSection Component
 *
 * This component renders the floating button section in the bottom-right corner
 * of the screen, including the "lightning" button that toggles visibility,
 * and the animated Inbox/Task buttons.
 *
 * Props:
 * - isOpen: Controls visibility/animation of the Task & Inbox buttons.
 * - handleOnclick: Callback to toggle the open state.
 * - activePopover: Tracks which popover ('task' | 'inbox') is currently active.
 * - setActivePopover: Setter function to update the active popover state.
 * - isLoading: Boolean indicating if popover content is loading.
 */
export function OpenQuickTabSection({
  handleOnclick,
  isOpen,
  activePopover,
  setActivePopover,
  isLoading,
}: PopOverProps) {
  return (
    <div className='flex flex-row-reverse items-center fixed bottom-[27px] right-[34px] gap-[26px] z-50'>
      {/* Lightning floating button */}
      <Button
        type='button'
        onClick={handleOnclick}
        className={cn(
          'pop-button select-none rounded-full w-[68px] h-[68px] flex justify-center items-center cursor-pointer z-50',
          // When a popover is active, change color and slightly shift position
          activePopover ? 'bg-Gray2 relative right-[18px]' : 'bg-Blue1',
        )}>
        {/* Show lightning icon only when no popover is active */}
        <img
          src={cloudIcon}
          alt='cloud-lightning'
          className={activePopover ? 'hidden' : 'block'}
        />
      </Button>

      {/* Inbox and Task popover buttons */}
      <TaskInboxButton
        isOpen={isOpen}
        activePopover={activePopover}
        setActivePopover={setActivePopover}
        isLoading={isLoading}
      />
    </div>
  );
}
