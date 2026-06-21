"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";

const ANCHOR_TRANSITION_MS = 700;
const LINK_NAVIGATION_DELAY_MS = 260;
const ROUTE_SETTLE_MS = 180;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

export function PageRefreshLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const navigationTimerRef = useRef<number | null>(null);
  const previousPathnameRef = useRef(pathname);

  function showLoader() {
    document.documentElement.classList.add("site-is-loading");
    flushSync(() => {
      setIsLoading(true);
    });
  }

  function hideLoader() {
    document.documentElement.classList.remove("site-is-loading");
    setIsLoading(false);
  }

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      hideLoader();
    }, ROUTE_SETTLE_MS);

    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [pathname]);

  useEffect(() => {
    function showBriefly() {
      showLoader();

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }

      hideTimerRef.current = window.setTimeout(() => {
        hideLoader();
      }, ANCHOR_TRANSITION_MS);
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      if (anchor.target && anchor.target !== "_self") {
        return;
      }

      if (anchor.hasAttribute("download")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      const currentUrl = new URL(window.location.href);
      const isSameDocument =
        url.pathname === currentUrl.pathname &&
        url.search === currentUrl.search &&
        url.hash !== currentUrl.hash;

      event.preventDefault();
      showLoader();

      if (isSameDocument || url.href === currentUrl.href) {
        if (navigationTimerRef.current) {
          window.clearTimeout(navigationTimerRef.current);
        }

        navigationTimerRef.current = window.setTimeout(() => {
          if (url.hash) {
            window.history.pushState(null, "", url.href);
            document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
          }

          showBriefly();
        }, LINK_NAVIGATION_DELAY_MS);

        return;
      }

      navigationTimerRef.current = window.setTimeout(() => {
        window.location.href = url.href;
      }, LINK_NAVIGATION_DELAY_MS);
    }

    function handleBeforeUnload() {
      showLoader();
    }

    document.addEventListener("click", handleClick, true);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("beforeunload", handleBeforeUnload);

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }

      if (navigationTimerRef.current) {
        window.clearTimeout(navigationTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden={!isLoading}
      className={`site-refresh-loader fixed inset-0 z-[var(--z-loader)] overflow-hidden bg-white/86 backdrop-blur-sm transition-opacity duration-150 ${
        isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Logo compact idPrefix="refresh-loader-logo" className="pointer-events-none absolute left-1/2 top-1/2 [&_svg]:!h-20 [&_svg]:!w-20 animate-[site-loader-logo-pulse_1.15s_ease-in-out_infinite]" />
    </div>
  );
}
