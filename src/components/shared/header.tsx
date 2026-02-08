"use client";

import type { Href } from "@/components/view-transition-link";
import { ViewTransitionLink } from "@/components/view-transition-link";
import { navigationData } from "@/lib/navigation-data";
import {
  ListIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

function getHrefPathname(href: Href): string {
  if (typeof href === "string") return href;
  if ("pathname" in href && typeof href.pathname === "string") {
    return href.pathname;
  }
  return String(href);
}

export const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const isActive = (href: Href) => {
    const hrefPath = getHrefPathname(href).replace(/\/$/, "");
    const current = pathname.replace(/\/$/, "");

    // Home should ONLY be active on "/"
    if (hrefPath === "") return current === "";

    return current === hrefPath || current.startsWith(hrefPath + "/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="p-6 px-4 sm:px-6 lg:px-8 w-full mx-auto">
          <nav className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <ViewTransitionLink href="/" className="shrink-0 cursor-pointer">
              <Image
                src="https://www.pulse-clinic.co.uk/wp-content/uploads/2024/01/PulseLogo.png"
                alt="Pulse Laser Clinic Logo"
                width={180}
                height={36}
                priority
                className="h-7 md:h-9 w-auto object-contain"
              />
            </ViewTransitionLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationData.map((item) => {
                const hasChildren = "children" in item;
                const active = hasChildren
                  ? item.children.some((c) => isActive(c.href))
                  : isActive(item.href);

                const isOpen = openMenu === item.name;

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenMenu(item.name)}
                    onMouseLeave={() => hasChildren && setOpenMenu(null)}
                  >
                    {hasChildren ? (
                      <>
                        <button className="relative group uppercase text-sm font-semibold tracking-wide text-gray-900 py-2 inline-flex items-center gap-1 cursor-pointer">
                          {item.name}
                          <svg
                            className={`h-3 w-3 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
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

                          {/* Indicator */}
                          <span
                            className={`absolute left-1/2 -bottom-1 h-0.5 w-full -translate-x-1/2 bg-black transition-transform duration-300 origin-center
                              ${
                                active || isOpen
                                  ? "scale-x-100"
                                  : "scale-x-0 group-hover:scale-x-100"
                              }
                            `}
                          />
                        </button>

                        {/* Dropdown */}
                        <div
                          className={`absolute left-0 top-full mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300
                            ${
                              isOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none"
                            }
                          `}
                        >
                          <div className="py-2">
                            {item.children.map((child) => (
                              <ViewTransitionLink
                                key={child.name}
                                href={child.href}
                                className={`block px-5 py-3 text-sm cursor-pointer transition
                                  ${
                                    isActive(child.href)
                                      ? "bg-gray-50 text-gray-900 font-medium"
                                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                  }
                                `}
                              >
                                {child.name}
                              </ViewTransitionLink>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <ViewTransitionLink
                        href={item.href}
                        className="relative group uppercase text-sm font-semibold tracking-wide text-gray-900 py-2 cursor-pointer"
                      >
                        {item.name}
                        <span
                          className={`absolute left-1/2 -bottom-1 h-0.5 w-full -translate-x-1/2 bg-black transition-transform duration-300 origin-center
                            ${
                              active
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }
                          `}
                        />
                      </ViewTransitionLink>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Icons (unchanged) */}
            <div className="flex items-center space-x-4 md:space-x-5">
              {/* User */}
              <button className="text-gray-900 hover:text-gray-700 cursor-pointer">
                <UserIcon size={24} />
              </button>

              {/* Cart */}
              <button className="relative text-gray-900 hover:text-gray-700">
                <ShoppingCartIcon size={24} />
                <span className="absolute -top-1.75 -right-1.5 bg-black text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Search */}
              <button className="text-gray-900 hover:text-gray-700">
                <MagnifyingGlassIcon size={24} />
              </button>

              {/* mobile menu button kept */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-900"
              >
                {mobileMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
