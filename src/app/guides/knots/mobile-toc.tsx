"use client";

import { TableOfContentsIcon } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { knots } from "@/data/knots";

export function MobileToc() {
  return (
    <div className="size-full">
      <Sheet>
        <SheetTrigger
          className="lg:hidden flex items-center justify-center size-full hover:bg-accent transition-colors"
          aria-label="Open contents"
        >
          <TableOfContentsIcon className="size-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:max-w-xs">
          <SheetHeader className="border-b">
            <SheetTitle>Contents</SheetTitle>
          </SheetHeader>
          <nav className="overflow-y-auto px-4 pb-4">
            <ol className="flex flex-col gap-1">
              {knots.map((knot, index) => (
                <li key={knot.id}>
                  <SheetClose asChild>
                    <a
                      href={`#${knot.id}`}
                      className="flex items-baseline gap-2 py-1.5 hover:underline underline-offset-4"
                    >
                      <span className="font-mono text-muted-foreground w-6 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{knot.name}</span>
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ol>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
