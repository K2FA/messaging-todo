import questionAnswer from '@/assets/icons/question_answer.png';
import questionAnswerWhite from '@/assets/icons/question_answer_white.png';
import { cn } from '@/lib/utils';
import type { PopOverProps } from '@/types/popover-type';
import { InboxPopOverContent } from '../../popovers/inbox/inbox-popover-content';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

/**
 * InboxPopButton Component
 *
 * This component renders a button that toggles the Inbox popover.
 * It displays a tooltip label, manages animated positioning, and opens a floating
 * panel with inbox-related content.
 *
 * Props (via PopOverProps):
 * - isOpen: Controls the visibility of the quick access tab buttons.
 * - activePopover: Currently active popover type ('task' | 'inbox' | null).
 * - setActivePopover: State updater to switch between popovers.
 * - isLoading: Boolean to display a loading state while fetching content.
 */
export function InboxPopButton({ isOpen, activePopover, setActivePopover, isLoading }: PopOverProps) {
  const isActive = activePopover === 'inbox';

  return (
    <div
      className={cn(
        'relative transition ease-out duration-300',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[90px] opacity-0',
        isActive && 'translate-x-[90px] z-50',
      )}>
      {/* Floating label above the button */}
      <span
        className={cn(
          'absolute -top-9 left-1/2 -translate-x-1/2 text-Gray6 select-none font-lato text-sm transition ease-out duration-300',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0',
          activePopover && 'hidden',
        )}>
        Inbox
      </span>

      {/* Popover for Inbox content */}
      <Popover
        open={activePopover === 'inbox'}
        onOpenChange={(open) => setActivePopover(open ? 'inbox' : null)}>
        <PopoverTrigger
          className={cn(
            'pop-button select-none rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer z-40',
            isActive ? 'bg-Purple1 w-[68px] h-[68px]' : 'bg-Gray6',
          )}>
          <img
            src={isActive ? questionAnswerWhite : questionAnswer}
            alt='question-answer'
          />
        </PopoverTrigger>

        <PopoverContent className='w-[550px] h-[553px] 3xl:w-[734px] 3xl:h-[737px] border-0 mb-[15px]'>
          {/* Inbox content with loading indicator */}
          <InboxPopOverContent isLoading={isLoading} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
