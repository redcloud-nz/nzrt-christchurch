"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { knots } from "@/data/knots";

const items = knots.map((knot, index) => ({
  id: knot.id,
  index,
  label: knot.name,
}));

/**
 * "On this page" side nav for the desktop knots page — jump links to each knot,
 * with the current one highlighted as it scrolls past. The page scrolls inside
 * the layout's `ScrollArea` (not the window), so the scroll-spy has to measure
 * against that viewport rather than `window`.
 */
export function KnotsToc() {
  const [activeId, setActiveId] = useState<string | undefined>(items[0]?.id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = navRef.current?.closest(
      '[data-slot="scroll-area-viewport"]',
    );
    if (!container) return;

    let ticking = false;
    function updateActiveId() {
      ticking = false;

      const atBottom =
        container!.scrollTop + container!.clientHeight >=
        container!.scrollHeight - 1;
      if (atBottom) {
        setActiveId(items[items.length - 1]?.id);
        return;
      }

      const triggerY = container!.getBoundingClientRect().top + 24;

      let current = items[0]?.id;
      for (const item of items) {
        const heading = document.getElementById(item.id);
        if (heading && heading.getBoundingClientRect().top <= triggerY) {
          current = item.id;
        }
      }
      setActiveId(current);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveId);
      }
    }

    updateActiveId();
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hidden lg:block">
      <nav ref={navRef} className="sticky top-4 text-sm">
        <p className="mb-2 font-bold text-xs uppercase tracking-wide text-muted-foreground">
          Contents
        </p>
        <ol className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "flex items-baseline gap-2 border-l-2 border-transparent py-1 pl-3 text-muted-foreground transition-colors hover:text-foreground",
                  activeId === item.id &&
                    "border-foreground font-medium text-foreground",
                )}
              >
                <span className="font-mono w-6 shrink-0">
                  {String(item.index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

/**
 * A spacer for the main column so the last knot section can still scroll up to
 * the contents nav's trigger line — without it there's nowhere left to scroll
 * once the last heading is reached.
 */
export function KnotsTocSpacer() {
  return <div aria-hidden className="hidden h-[50vh] lg:block" />;
}
