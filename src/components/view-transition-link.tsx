"use client";

import { cn } from "@/lib/utils";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AnchorHTMLAttributes,
  ComponentProps,
  forwardRef,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";

/* ---------------------------------- types --------------------------------- */

type NavigateOptions = {
  scroll?: boolean;
};

export type Href = ComponentProps<typeof Link>["href"];

interface ViewTransitionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: Href;
  children: ReactNode;
  className?: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: "intent" | boolean; // modern Next.js accepts "intent" too
}

/* -------------------------- view transition helper -------------------------- */

function startViewTransition(callback: () => void) {
  // SSR guard + graceful fallback
  if (typeof document === "undefined" || !("startViewTransition" in document)) {
    callback();
    return;
  }

  try {
    (document as any).startViewTransition(callback);
  } catch {
    callback();
  }
}

/* ---------------------------- main link component --------------------------- */

export const ViewTransitionLink = forwardRef<
  HTMLAnchorElement,
  ViewTransitionLinkProps
>(function ViewTransitionLink(
  {
    href,
    children,
    className,
    replace = false,
    scroll = true,
    prefetch = true,
    onClick,
    target,
    rel,
    ...props
  },
  ref,
) {
  const router = useRouter();
  const pathname = usePathname();

  const prefetchTimeout = useRef<NodeJS.Timeout | null>(null);

  // Normalize for checks
  const hrefString = typeof href === "string" ? href : href.pathname ?? "";
  const isHashLink = hrefString.startsWith("#");
  const isSamePage = isHashLink || hrefString === pathname;

  // For typed router methods
  const typedHref = href as Route;

  const handlePrefetch = useCallback(() => {
    if (!prefetch || isSamePage || target === "_blank" || isHashLink) return;

    // Next.js accepts string | UrlObject → safe cast
    router.prefetch(typedHref);
  }, [prefetch, isSamePage, target, isHashLink, router, typedHref]);

  useEffect(() => {
    return () => {
      if (prefetchTimeout.current) clearTimeout(prefetchTimeout.current);
    };
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      // Let browser handle: middle click, new tab, external, hash
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        target ||
        isHashLink
      ) {
        return;
      }

      e.preventDefault();

      startViewTransition(() => {
        if (replace) {
          router.replace(typedHref, { scroll });
        } else {
          router.push(typedHref, { scroll });
        }
      });
    },
    [onClick, target, isHashLink, replace, scroll, router, typedHref],
  );

  return (
    <a
      ref={ref}
      href={hrefString}
      className={cn(className)}
      onClick={handleClick}
      onMouseEnter={() => {
        if (prefetchTimeout.current) clearTimeout(prefetchTimeout.current);
        prefetchTimeout.current = setTimeout(handlePrefetch, 80);
      }}
      onMouseLeave={() => {
        if (prefetchTimeout.current) clearTimeout(prefetchTimeout.current);
      }}
      onFocus={handlePrefetch}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      {...props}
    >
      {children}
    </a>
  );
});

ViewTransitionLink.displayName = "ViewTransitionLink";

/* -------------------------- programmatic navigation -------------------------- */

export function useViewTransitionRouter() {
  const router = useRouter();

  const push = useCallback(
    (href: Route, options?: NavigateOptions) => {
      startViewTransition(() => router.push(href, options));
    },
    [router],
  );

  const replace = useCallback(
    (href: Route, options?: NavigateOptions) => {
      startViewTransition(() => router.replace(href, options));
    },
    [router],
  );

  const back = useCallback(() => {
    startViewTransition(() => router.back());
  }, [router]);

  const forward = useCallback(() => {
    startViewTransition(() => router.forward());
  }, [router]);

  return {
    push,
    replace,
    back,
    forward,
    prefetch: router.prefetch,
  };
}
