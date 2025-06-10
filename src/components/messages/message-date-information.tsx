import { cn } from '@/lib/utils';

export function MessageDateInformation({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-center text-center text-sm 3xl:text-base text-Gray2 mt-[35px]',
        className,
      )}
      {...props}>
      <hr className='grow border-t align-middle'></hr>{' '}
      <span className='px-2.5 font-bold font-lato flex items-center gap-[7.23px]'>{children}</span>{' '}
      <hr className='grow border-t align-middle' />
    </div>
  );
}
