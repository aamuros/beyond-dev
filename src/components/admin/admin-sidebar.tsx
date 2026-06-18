"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/admin/leads", label: "Leads", icon: UserGroupIcon },
  { href: "/admin/case-studies", label: "Case Studies", icon: BriefcaseIcon },
  { href: "/admin/team", label: "Team", icon: UsersIcon },
  { href: "/admin/testimonials", label: "Testimonials", icon: ChatBubbleLeftRightIcon },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-5 py-6">
        <Image
          src="/images/beyond-dev-logo.png"
          alt="beyond.dev"
          width={100}
          height={28}
          className="h-7 w-auto"
        />
        <Badge variant="accent">admin</Badge>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent-muted text-accent"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border px-5 py-4">
        <p className="text-xs text-text-faint">Beyond Dev Admin</p>
      </div>
    </div>
  );
}
