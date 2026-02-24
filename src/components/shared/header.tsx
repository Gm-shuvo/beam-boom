"use client";

import type { Href } from "@/components/view-transition-link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { navigationData } from "@/lib/navigation-data";
import {
  ListIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function getHrefPathname(href: Href): string {
  if (typeof href === "string") return href;
  if ("pathname" in href && typeof href.pathname === "string") {
    return href.pathname;
  }
  return String(href);
}

export const Header = () => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isActive = (href: Href) => {
    const hrefPath = getHrefPathname(href).replace(/\/$/, "");
    const current = pathname.replace(/\/$/, "");

    if (hrefPath === "") return current === "";
    return current === hrefPath || current.startsWith(hrefPath + "/");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-b border-gray-200/60 dark:border-gray-700/60"
          : "bg-transparent"
      }`}
    >
      <div className="p-6 px-4 sm:px-6 lg:px-8 w-full mx-auto">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-2.5 md:py-3" : "py-3 md:py-4"
          }`}
        >
          {/* Logo */}
          <ViewTransitionLink href="/" className="shrink-0">
            <Image
              src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/PulseLogo.png"
              alt="Pulse Laser Clinic Logo"
              width={180}
              height={36}
              priority
              className="h-7 md:h-9 w-auto object-contain dark:brightness-0 dark:invert"
            />
          </ViewTransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationData.map((item) => {
              const hasChildren = "children" in item;
              const active = hasChildren
                ? item.children.some((c) => isActive(c.href))
                : isActive(item.href);

              return (
                <div key={item.name} className="relative">
                  {hasChildren ? (
                    <DropdownMenu
                      open={openItem === item.name}
                      onOpenChange={(open) =>
                        setOpenItem(open ? item.name : null)
                      }
                      modal={false}
                    >
                      <DropdownMenuTrigger className="border-none" asChild>
                        <button
                          onMouseEnter={() => setOpenItem(item.name)}
                          onClick={() =>
                            setOpenItem(
                              openItem === item.name ? null : item.name,
                            )
                          }
                          className="relative group uppercase text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100 py-2 inline-flex items-center gap-1"
                        >
                          {item.name}
                          <svg
                            className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180 border-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>

                          <span
                            className={`absolute left-1/2 -bottom-1 h-0.5 w-full -translate-x-1/2 bg-black dark:bg-white transition-transform duration-300 origin-center ${
                              active || openItem === item.name
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        sideOffset={12}
                        onMouseEnter={() => setOpenItem(item.name)}
                        onMouseLeave={() => setOpenItem(null)}
                        className="w-64 rounded-lg border border-gray-200 dark:border-gray-700 shadow-xl overflow-y-auto bg-white dark:bg-gray-800"
                      >
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.name} asChild>
                            <ViewTransitionLink
                              href={child.href}
                              className={`w-full px-4 py-2 text-sm ${
                                isActive(child.href)
                                  ? "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                              }`}
                            >
                              {child.name}
                            </ViewTransitionLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <ViewTransitionLink
                      href={item.href}
                      className="relative group uppercase text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100 py-2"
                    >
                      {item.name}
                      <span
                        className={`absolute left-1/2 -bottom-1 h-0.5 w-full -translate-x-1/2 bg-black dark:bg-white transition-transform duration-300 origin-center ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </ViewTransitionLink>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <SunIcon size={22} weight="bold" />
              ) : (
                <MoonIcon size={22} weight="bold" />
              )}
            </button>

            <button className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              <UserIcon size={22} />
            </button>

            <button className="relative text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              <ShoppingCartIcon size={22} />
              <span className="absolute -top-1.75 -right-1.5 bg-black dark:bg-white dark:text-black text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            <button className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 hidden sm:block">
              <MagnifyingGlassIcon size={22} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900 dark:text-gray-100"
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-6 space-y-4">
          {navigationData.map((item) => {
            const hasChildren = "children" in item;
            const active = hasChildren
              ? item.children.some((c) => isActive(c.href))
              : isActive(item.href);

            return (
              <div key={item.name} className="space-y-2">
                {hasChildren ? (
                  <>
                    <span className="block uppercase text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <ViewTransitionLink
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block text-sm ${
                            isActive(child.href)
                              ? "text-gray-900 dark:text-gray-100 font-medium"
                              : "text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {child.name}
                        </ViewTransitionLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <ViewTransitionLink
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block uppercase text-sm font-semibold tracking-wide ${
                      active
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.name}
                  </ViewTransitionLink>
                )}
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
};
