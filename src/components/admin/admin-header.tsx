"use client";

import { signOut } from "next-auth/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface AdminHeaderProps {
  onToggleSidebar: () => void;
}

export function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-sm lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="rounded-lg p-2 text-text-secondary hover:bg-surface hover:text-text-primary transition-colors lg:hidden"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
        <span className="text-sm text-text-muted font-mono">beyond.dev admin</span>
      </div>

      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="rounded-lg px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
      >
        Sign out
      </button>
    </header>
  );
}
