import chromeReader from '@/assets/icons/chrome_reader_mode.png';
import questionAnswer from '@/assets/icons/question_answer.png';
import type { OpenQuickTabSectionProps } from '@/pages/home/sections/open-quick/open-quick-tab-section';
import { InboxPopOver } from '../popovers/inbox-popover';
import { TaskPopOver } from '../popovers/task-popover';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export function TaskInboxButton({ isOpen }: OpenQuickTabSectionProps) {
  return (
    <div className='flex gap-[26px] items-center'>
      <div
        className={`relative transition ease-out duration-300 ${
          isOpen ? '-translate-x-0 opacity-100' : ' translate-x-[176px] opacity-0'
        }`}>
        <span
          className={`absolute -top-9 left-1/2 -translate-x-1/2 text-Gray6 select-none font-lato transition ease-out duration-300  ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'
          }`}>
          Task
        </span>
        <Popover>
          <PopoverTrigger className='pop-button select-none bg-Gray6 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer z-40'>
            <img
              src={chromeReader}
              alt='chrome-reader'
            />
          </PopoverTrigger>

          <PopoverContent className='w-[550px] h-[553px] 3xl:w-[734px] 3xl:h-[737px] border-0 mb-[15px]'>
            <TaskPopOver />
          </PopoverContent>
        </Popover>
      </div>

      <div
        className={`relative transition ease-out duration-300 ${
          isOpen ? '-translate-x-0 opacity-100' : ' translate-x-[90px] opacity-0'
        }`}>
        <span
          className={`absolute -top-9 left-1/2 -translate-x-1/2 text-Gray6 select-none font-lato transition ease-out duration-300  ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-9 opacity-0'
          }`}>
          Inbox
        </span>
        <Popover>
          <PopoverTrigger className='pop-button select-none bg-Gray6 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer'>
            <img
              src={questionAnswer}
              alt='question-answer'
            />
          </PopoverTrigger>

          <PopoverContent className='w-[550px] h-[553px] 3xl:w-[734px] 3xl:h-[737px] border-0 mb-[15px]'>
            <InboxPopOver />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
