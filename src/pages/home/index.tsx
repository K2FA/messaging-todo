import { HomeLayout } from '@/layouts/home-layout';
import { useState } from 'react';
import { OpenQuickTabSection } from './sections/open-quick/open-quick-tab-section';

export function HomePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenQuickTab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HomeLayout>
      <OpenQuickTabSection
        isOpen={isOpen}
        handleOnclick={handleOpenQuickTab}
      />
    </HomeLayout>
  );
}
