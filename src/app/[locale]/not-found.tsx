import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <AlertTriangle size={64} className="text-destructive mb-4 mx-auto" />
        <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, we couldn&#39;t find the page you&#39;re looking for.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-buttonText rounded-md font-semibold animate-pulse hover:animate-none"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
