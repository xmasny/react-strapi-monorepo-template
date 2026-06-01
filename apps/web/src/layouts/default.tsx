import { Link } from '@heroui/react';

import { Navbar } from '@/components/navbar';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          className="flex items-center gap-1 text-current"
          href="/about"
        >
          <span className="text-muted">Powered by</span>
          <p className="text-accent">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
