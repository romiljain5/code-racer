"use client";

import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";
import { UserDropdown } from "./user-dropdown";
import { useSession } from "next-auth/react";

export function Header() {
  const isLoggedIn = !!useSession().data;

  return (
    <header className="bg-background/10 backdrop-blur-sm flex sticky top-0 z-40 w-full border-b-2 border-yellow-500">
      <div className="container flex h-20 items-center w-full space-x-4 sm:space-x-0">
        <div className="flex-1">
          <MainNav items={siteConfig.getHeaderLinks(isLoggedIn)} />
        </div>
        <MobileNav />
        <nav className="hidden md:flex items-center space-x-4">
          <UserDropdown />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
