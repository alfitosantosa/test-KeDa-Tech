"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "HOME", href: "#home", active: true },
  { label: "ABOUT", href: "#about", active: false },
  { label: "PRICING", href: "#pricing", active: false },
  { label: "CONTACT", href: "#contact", active: false },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-6 lg:px-0">
      <div className="flex h-[74px] items-center justify-between rounded-[22px] border border-white/80 bg-white/85 py-0 pr-3.5 pl-[18px] shadow-[0px_14px_38px_#0B2E6B24] backdrop-blur-[10px]">
        <Link href="/" aria-label="Invenstory home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <nav aria-label="Main" className="flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-[9px] px-3.5 py-2 text-xs font-bold tracking-[1.5px] transition-colors",
                  link.active
                    ? "bg-[#EDF3FF] text-primary"
                    : "text-ink-soft hover:bg-secondary hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="h-[22px] w-px bg-ink/10" />
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-lg border-[1.5px] border-cyan bg-white px-5 text-xs font-bold tracking-[1.5px] text-ink hover:bg-secondary"
          >
            <Link href="/login">LOGIN</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mt-2 flex flex-col gap-1 rounded-[22px] border border-line bg-white p-3 shadow-[0px_14px_38px_#0B2E6B24] lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3.5 py-2.5 text-xs font-bold tracking-[1.5px]",
                link.active
                  ? "bg-[#EDF3FF] text-primary"
                  : "text-ink-soft hover:bg-secondary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="mt-1 h-10 rounded-lg border-[1.5px] border-cyan text-xs font-bold tracking-[1.5px] text-ink"
          >
            <Link href="/login" onClick={() => setOpen(false)}>
              LOGIN
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
