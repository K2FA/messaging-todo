import { useEffect, useState } from 'react';

interface LoadingProps {
  label: string;
}

export function Loading({ label }: LoadingProps) {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-3'>
      <svg
        className='animate-spin h-[64px] w-[64px] text-[#C4C4C4]'
        viewBox='0 0 88 88'>
        <circle
          cx='44'
          cy='44'
          r='36'
          stroke='currentColor'
          strokeWidth='10'
          opacity='0.2'
          fill='none'
        />
        <path
          d='M44 8
             a36 36 0 0 1 0 72
             a36 36 0 0 1 0 -72'
          stroke='currentColor'
          strokeWidth='10'
          strokeLinecap='round'
          fill='none'
          strokeDasharray='210'
          strokeDashoffset='100'
        />
      </svg>

      <h4 className='text-sm text-center text-Gray2 font-lato font-semibold capitalize '>
        Loading {label} {'.'.repeat(dotCount)}
      </h4>
    </div>
  );
}
