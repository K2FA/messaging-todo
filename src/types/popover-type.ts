import type { Dispatch, SetStateAction } from 'react';

export interface PopOverProps {
  handleOnclick?: () => void;
  isOpen: boolean;
  activePopover: 'task' | 'inbox' | null;
  setActivePopover: Dispatch<SetStateAction<'task' | 'inbox' | null>>;
  isLoading?: boolean;
}
