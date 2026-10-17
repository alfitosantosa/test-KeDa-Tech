import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Logo } from "@/components/logo";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Sign in — Invenstory",
  description: "Sign in to your Invenstory workspace.",
};

const proofs = [
  "Stock in, stock out and profit in one place",
  "Catalogue import in about 20 minutes",
  "No card needed to start",
];

const stats = [
  { value: "38 hrs", label: "saved per month" },
  { value: "2.4%", label: "less shrinkage" },
  { value: "11 min", label: "to close the day" },
];

export default function LoginPage() {
  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-[1.05fr_1fr]">
      <section className="relative hidden overflow-hidden bg-ink px-14 py-12 lg:flex lg:flex-col lg:justify-between">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[160px] -left-[160px] size-[520px] rounded-full bg-primary opacity-30 blur-[60px]" />
          <div className="absolute right-[-140px] bottom-[-120px] size-[520px] rounded-full bg-violet opacity-30 blur-[70px]" />
          <div className="absolute top-[140px] right-[-60px] size-[420px] rounded-full border border-white/10" />
        </div>

        <div className="relative z-10">
          <Link href="/" aria-label="Invenstory home">
            <Logo light />
          </Link>
        </div>

        <div className="relative z-10 flex max-w-[460px] flex-col gap-7">
          <div className="flex flex-col gap-4">
            <span className="text-[10.5px] font-bold tracking-[1.6px] text-cyan">
              INVENTORY · SALES · PROFIT
            </span>
            <h2 className="font-heading text-[38px] leading-[1.15] font-bold tracking-[-1.2px] text-white">
              Know what you own. Know what you earn.
            </h2>
            <p className="text-[14px] leading-[24px] text-[#B6C0D0]">
              One clear view of the goods coming in, the goods going out, and the
              profit left at the end of the day.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {proofs.map((proof) => (
              <li key={proof} className="flex items-center gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan/15">
                  <Check className="size-3 text-cyan" strokeWidth={2.6} />
                </span>
                <span className="text-[12.5px] text-[#D5DCE7]">{proof}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1">
                <span className="font-heading text-xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[10.5px] text-[#AEB8C8]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[11px] text-[#7E8A9C]">
          © 2025 Invenstory B.V. · Built in Rotterdam
        </p>
      </section>

      <section className="relative flex flex-col justify-center overflow-hidden px-6 py-10 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[260px] -right-[220px] size-[640px] rounded-full bg-[radial-gradient(ellipse_at_center,#C6DBFF_0%,#C6DBFF00_70%)] opacity-90"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[240px] -left-[180px] size-[520px] rounded-full bg-brand-soft opacity-80"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col gap-6">
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/" aria-label="Invenstory home">
              <Logo size="sm" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-muted-foreground hover:text-ink"
            >
              <ArrowLeft className="size-3.5" /> Home
            </Link>
          </div>

          <LoginForm />

          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="hidden items-center gap-1.5 text-[11.5px] font-semibold text-muted-foreground hover:text-ink lg:inline-flex"
            >
              <ArrowLeft className="size-3.5" /> Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
