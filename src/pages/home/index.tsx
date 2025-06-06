import { HomeLayout } from '@/layouts/home-layout';
import { useEffect, useState } from 'react';
import { OpenQuickTabSection } from './sections/open-quick-tab-section';

/**
 * HomePage Component
 *
 * This is the main entry point for the Home page UI.
 * It manages the logic for displaying and toggling the floating "Quick Tab"
 * (lightning icon) and handling popovers like Task and Inbox.
 */
export function HomePage() {
  // Controls visibility of the floating action buttons
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Tracks which popover is currently active: 'task', 'inbox', or null
  const [activePopover, setActivePopover] = useState<'task' | 'inbox' | null>(null);

  // Indicates loading state while popover content is being fetched/rendered
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * useEffect - Trigger loading animation when a popover becomes active.
   * Resets the loading state after 2 seconds to simulate data fetching or loading state.
   */
  useEffect(() => {
    if (activePopover) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Cleanup timeout to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [activePopover]);

  /**
   * Toggles the visibility of the floating quick tab section.
   * Also resets activePopover to null when the quick tab is closed.
   */
  const handleOpenQuickTab = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActivePopover(null);
    }
  };

  return (
    <HomeLayout>
      {/* Floating action section for Task/Inbox popovers and lightning button */}
      <OpenQuickTabSection
        isOpen={isOpen}
        handleOnclick={handleOpenQuickTab}
        activePopover={activePopover}
        setActivePopover={setActivePopover}
        isLoading={isLoading}
      />
    </HomeLayout>
  );
}
