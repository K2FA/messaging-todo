import chromeReader from '@/assets/icons/chrome_reader_mode.png';
import cloudIcon from '@/assets/icons/cloud-lightning.png';
import questionAnswer from '@/assets/icons/question_answer.png';
import { Button } from '@/components/ui/button';

interface OpenQuickTabSectionProps {
  handleOnclick: () => void;
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
          <Button className='pop-button select-none bg-Gray6 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer'>
            <img
              src={chromeReader}
              alt='chrome-reader'
            />
          </Button>
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
          <Button className='pop-button select-none bg-Gray6 rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer'>
            <img
              src={questionAnswer}
              alt='question-answer'
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
