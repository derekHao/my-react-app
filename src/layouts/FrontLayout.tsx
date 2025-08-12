import React from 'react';
import type { PropsWithChildren } from 'react';
import { Navbar } from '@/components/Navbar';
interface LayoutProps {
  className?: string;
}
export const FrontLayout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
