// lib/navigation-data.ts

import type { Href } from "@/components/view-transition-link";

export interface NavigationLink {
  name: string;
  href: Href;
}

export interface NavigationGroup {
  name: string;
  children: NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationGroup;

export const navigationData = [
  { name: "HOME", href: "/" as Href },
  { name: "ABOUT US", href: "/about" as Href },
  {
    name: "TREATMENTS",
    children: [
      { name: "Laser Hair Removal", href: "/treatments/laser-hair-removal" as Href },
      { name: "Laser Skin Resurfacing", href: "/treatments/laser-skin-resurfacing" as Href },
      // add more...
    ],
  },
  {
    name: "SKIN CONDITION",
    children: [
      { name: "Acne", href: "/skin-conditions/acne" as Href },
      { name: "Rosacea", href: "/skin-conditions/rosacea" as Href },
      // add more...
    ],
  },
  { name: "PRICING", href: "/pricing" as Href },
  { name: "SHOP", href: "/shop" as Href },
  {
    name: "MORE INFO",
    children: [
      { name: "Products", href: "/products" as Href },
      { name: "Special Offers", href: "/special-offers" as Href },
      { name: "Testimonials", href: "/testimonials" as Href },
    ],
  },
  { name: "CONTACT US", href: "/contact-us" as Href },
] as const satisfies readonly NavigationItem[];
