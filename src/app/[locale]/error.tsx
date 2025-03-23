'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <AlertTriangle size={48} className="text-primary mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {error.message || 'An unexpected error has occurred.'}
      </p>
      <Button
        onClick={() => reset()}
        className="px-6 py-3 bg-destructive font-semibold rounded-md hover:bg-primary hover:transition-all"
      >
        {' '}
        Try again
      </Button>
    </div>
  );
}
