'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';

interface MobileSidebarProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  children,
  open,
  setOpen,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {!open && (
        <Dialog.Trigger asChild>
          <button
            aria-label="Toggle sidebar navigation"
            className="fixed bottom-5 right-5 z-50 rounded-full bg-primary text-white p-2 shadow-lg [min-width:950px]:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-0 overflow-y-auto p-4 bg-sidebar">
          <Dialog.Title>
            <VisuallyHidden>Sidebar Navigation</VisuallyHidden>
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Use this menu to navigate the application sections.
          </Dialog.Description>
          <div className="h-full w-full flex flex-col">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              className="text-primary hover:text-destructive text-2xl font-bold bg-sidebar self-end"
              size="icon"
            >
              &times;
            </Button>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
