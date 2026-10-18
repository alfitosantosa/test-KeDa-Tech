import Link from "next/link";
import { Logo } from "@/components/logo";

const links = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRICING", href: "#pricing" },
  { label: "CONTACT", href: "#contact" },
  { label: "LOGIN", href: "/login" },
];

const legal = ["Privacy", "Terms", "Status"];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="h-1 w-full bg-[linear-gradient(90deg,#2DD4F0_0%,#1F66F5_55%,#C79BE0_100%)]" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 pt-12 pb-10 lg:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Logo size="sm" tagline={false} />
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {links.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-bold tracking-[1.3px] text-ink-soft hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-bold tracking-[1.3px] text-ink-soft hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="h-px w-full bg-line" />

        <div className="flex flex-col gap-3 text-[11px] text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 Invenstory B.V. · Built in Rotterdam</span>
          <div className="flex items-center gap-5">
            {legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
