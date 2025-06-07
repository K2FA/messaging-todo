export interface PopOverProps {
  handleOnclick?: () => void;
  isOpen: boolean;
  activePopover: 'task' | 'inbox' | null;
  setActivePopover: (value: 'task' | 'inbox' | null) => void;
  isLoading?: boolean;
}
