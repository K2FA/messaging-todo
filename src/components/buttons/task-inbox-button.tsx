import type { PopOverProps } from '@/types/popover-type';
import { InboxPopButton } from './inbox-pop-button';
import { TaskPopButton } from './task-pop-button';

/**
 * TaskInboxButton Component
 *
 * This component renders both the Task and Inbox popover buttons side by side.
 * It manages their visibility, position, and interactivity depending on the `isOpen`
 * state and the currently `activePopover`.
 *
 * Props (via PopOverProps):
 * - isOpen: Whether the popover buttons are currently shown (expanded).
 * - activePopover: The current active popover ('task' | 'inbox' | null).
 * - setActivePopover: Function to change the active popover.
 * - isLoading: Boolean indicating loading state inside popover content.
 */
export function TaskInboxButton({ isOpen, activePopover, setActivePopover, isLoading }: PopOverProps) {
  return (
    <div className='flex gap-[26px] items-center'>
      {/* Task Popover Button */}
      <TaskPopButton
        isOpen={isOpen}
        activePopover={activePopover}
        setActivePopover={setActivePopover}
        isLoading={isLoading}
      />

      {/* Inbox Popover Button */}
      <InboxPopButton
        isOpen={isOpen}
        activePopover={activePopover}
        setActivePopover={setActivePopover}
        isLoading={isLoading}
      />
    </div>
  );
}
