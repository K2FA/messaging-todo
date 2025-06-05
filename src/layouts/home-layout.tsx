import { Navbar } from '@/components/navbars/navbar';
import { HomeSidebar } from '@/components/sidebars/home-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className='w-full min-h-screen bg-Gray1 overflow-hidden'>
      <SidebarProvider>
        <HomeSidebar />
        <main className='w-full min-h-screen relative'>
          <Navbar />

          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
