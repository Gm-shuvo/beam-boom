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
  { name: "ABOUT US", href: "/about-us" as Href },
  {
    name: "TREATMENTS",
    children: [
      {
        name: "Diode Laser Hair Removal for Women",
        href: "/treatment/diode-laser-hair-removal-for-women" as Href,
      },
      {
        name: "3D VJUVE™ Fractional Co2 Laser",
        href: "/treatment/3d-vjuve-fractional-co2-laser" as Href,
      },
      {
        name: "Permanent Make Up",
        href: "/treatment/permanent-make-up" as Href,
      },
      {
        name: "Laser Tattoo Removal",
        href: "/treatment/laser-tattoo-removal" as Href,
      },
      {
        name: "Advanced Carbon Laser Facial",
        href: "/treatment/advanced-carbon-laser-facial" as Href,
      },
      {
        name: "Skin and Injectable Treatments",
        href: "/treatment/skin-and-injectable-treatments" as Href,
      },
    ],
  },
  {
    name: "SKIN CONDITION",
    children: [
      { name: "Acne Scarring", href: "/skin-condition/acne-scarring" as Href },
      {
        name: "Acne",
        href: "/skin-condition/acne-2" as Href,
      },
      {
        name: "Eyebags & Tired Looking Eyes",
        href: "/skin-condition/eyebags-tired-looking-eyes" as Href,
      },
      {
        name: "Anti Ageing Wrinkle Reduction",
        href: "/skin-condition/anti-ageing-wrinkle-reduction" as Href,
      },
      {
        name: "Enlarged Pores & Blackheads",
        href: "/skin-condition/enlarged-pores-blackheads" as Href,
      },

      {
        name: "Double Chin & Saggy Neck",
        href: "/skin-condition/double-chin-saggy-neck" as Href,
      },
      {
        name: "Stretch Marks",
        href: "/skin-condition/stretch-marks" as Href,
      },
      {
        name: "Aged Skin",
        href: "/skin-condition/aged-skin" as Href,
      },
      {
        name: "Pigmentation",
        href: "/skin-condition/pigmentation" as Href,
      },
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
