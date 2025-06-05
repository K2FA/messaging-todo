import { Loading } from '../loaders/loading';

export function TaskPopOver() {
  return (
    <div className='w-full h-full bg-white rounded-[5px] border border-solid border-Gray7 py-5 px-[34px]'>
      <Loading label='Task List' />
    </div>
  );
}
