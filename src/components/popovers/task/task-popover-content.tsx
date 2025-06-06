import { Loading } from '../../loaders/loading';

/**
 * TaskPopOverContent Component
 *
 * This component represents the content area inside the Task popover.
 * It displays a loading indicator while data is being fetched or processed.
 *
 * Props:
 * - isLoading: boolean – Controls whether to show the loading spinner or actual task content.
 */
export function TaskPopOverContent({ isLoading }: { isLoading: boolean }) {
  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[34px]'>
      {/* Show loading spinner when data is still loading */}
      {isLoading ? <Loading label='Task List' /> : <div></div>}
    </div>
  );
}
