import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Package,
  Play,
  TrendingUp,
  Truck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

const bars = [46, 62, 54, 78, 68, 94, 80, 104, 88, 118, 106, 132];

const proofs = [
  "14-day trial, no card",
  "Catalogue import in 20 minutes",
  "Cancel from the dashboard",
];

const brands = [
  "NORTHSIDE MARKET",
  "PALOMA COFFEE",
  "VERDE SUPPLY",
  "ATELIER 12",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[560px] -left-[520px] size-[1560px] rounded-full bg-[radial-gradient(ellipse_at_center,#B9ECFF_0%,#B9ECFF00_70%)] opacity-85" />
        <div className="absolute top-[60px] right-[-200px] size-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,#C6DBFF_0%,#C6DBFF00_70%)] opacity-90" />
        <div className="absolute top-[520px] right-[-220px] size-[760px] rounded-full bg-[linear-gradient(120deg,#1F66F5_0%,#C79BE0_100%)] opacity-25" />
        <div className="absolute top-[600px] right-[140px] size-[132px] rounded-full bg-violet opacity-80" />
        <div className="absolute top-[540px] right-[20px] size-[44px] rounded-full border-[14px] border-white/50" />
      </div>

      <SiteHeader />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] gap-14 px-6 pt-14 pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-0 lg:pt-16">
        <div className="flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 rounded-[30px] border border-black/5 bg-white/80 px-3.5 py-[7px] backdrop-blur">
            <span className="size-[7px] rounded-full bg-primary" />
            <span className="text-[10.5px] font-bold tracking-[1.6px] text-ink">
              INVENTORY · SALES · PROFIT
            </span>
          </div>

          <h1 className="max-w-[580px] font-heading text-[38px] leading-[1.1] font-bold tracking-[-1.3px] text-ink sm:text-[48px] sm:leading-[53px]">
            Know what you own.
            <br />
            Know what you earn.
          </h1>

          <p className="max-w-[540px] text-base leading-[26px] text-[#1B2433]">
            Invenstory gives growing shops one clear view of the goods coming in, the
            goods going out, and the profit left at the end of the day.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              asChild
              className="h-[54px] gap-2.5 rounded-[10px] px-7 text-[14.5px] font-semibold shadow-[0px_12px_26px_#1F66F54D]"
            >
              <Link href="/login">
                Get started <ArrowRight className="size-[17px]" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-[54px] gap-2.5 rounded-[10px] border-[1.5px] border-cyan bg-white/90 px-6 text-[14.5px] font-semibold text-ink hover:bg-white"
            >
              <Link href="#about">
                <Play className="size-[15px] fill-primary text-primary" />
                See how it works
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-4 w-[3px] rounded-full bg-ink" />
            <span className="text-[13px] italic text-[#1B2433]">
              Built for the shop floor, not the spreadsheet.
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-[30px] gap-y-3">
            {proofs.map((proof) => (
              <span
                key={proof}
                className="inline-flex items-center gap-2 text-[11.5px] font-medium text-muted-foreground"
              >
                <svg
                  viewBox="0 0 14 14"
                  className="size-[13px] shrink-0"
                  aria-hidden
                  fill="none"
                >
                  <path
                    d="M11.48 3.2 5.4 9.3 2.6 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  />
                </svg>
                {proof}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
          <div className="absolute -top-4 right-4 z-20 hidden items-center gap-2 rounded-[24px] border border-line bg-white px-3.5 py-2.5 shadow-[0px_10px_24px_#0B2E6B24] sm:flex">
            <span className="size-[7px] rounded-full bg-warning" />
            <span className="text-[11px] font-semibold text-ink">
              3 items low in stock
            </span>
          </div>

          <Card className="gap-[18px] rounded-[22px] p-6 shadow-[0px_26px_60px_#0B2E6B2E] ring-1 ring-line lg:p-[26px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-[3px]">
                <h2 className="font-heading text-[15px] font-semibold text-ink">
                  Sales analytics
                </h2>
                <p className="text-[11.5px] text-muted-foreground">
                  Net profit, last 12 weeks
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-secondary px-3 py-[7px]">
                <span className="text-[11px] font-semibold text-ink">
                  This quarter
                </span>
                <ChevronDown className="size-3.5 text-muted-foreground" />
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-3">
              <span className="font-heading text-4xl font-bold tracking-[-1.2px] text-ink">
                $48,290
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-success-soft px-2.5 py-[5px]">
                <TrendingUp className="size-3.5 text-success" />
                <span className="text-[11.5px] font-bold text-success">18.4%</span>
              </span>
              <span className="pb-1 text-[11.5px] text-muted-foreground">
                vs. last quarter
              </span>
            </div>

            <div>
              <div className="flex h-[158px] items-end justify-between gap-[9px]">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                    aria-hidden
                  >
                    <div
                      className={`w-full rounded-t-[5px] ${
                        index > 8 ? "bg-primary" : "bg-[#D7E3FB]"
                      }`}
                      style={{ height: `${height}px` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between px-0.5 text-[10px] text-[#6B7280]">
                {["W1", "W3", "W5", "W7", "W9", "W11"].map((tick) => (
                  <span key={tick}>{tick}</span>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-line" />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-secondary">
                  <Package className="size-[17px] text-cyan" />
                </div>
                <div className="flex flex-col gap-px">
                  <span className="font-heading text-[13px] font-semibold text-ink">
                    1,284 units
                  </span>
                  <span className="text-[10.5px] text-muted-foreground">
                    Inbound this week
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-secondary">
                  <Truck className="size-[17px] text-violet" />
                </div>
                <div className="flex flex-col gap-px">
                  <span className="font-heading text-[13px] font-semibold text-ink">
                    986 units
                  </span>
                  <span className="text-[10.5px] text-muted-foreground">
                    Outbound this week
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <div className="absolute -bottom-8 -left-6 z-20 hidden w-[250px] flex-col gap-2 rounded-[16px] border border-line bg-white p-[18px] shadow-[0px_16px_40px_#0B2E6B33] md:flex">
            <div className="flex items-center gap-2">
              <div className="flex size-[26px] items-center justify-center rounded-lg bg-brand-soft">
                <Wallet className="size-3.5 text-primary" />
              </div>
              <span className="text-[11px] font-semibold text-muted-foreground">
                Profit today
              </span>
            </div>
            <span className="font-heading text-[22px] font-bold tracking-[-0.5px] text-ink">
              $1,940.20
            </span>
            <span className="text-[10.5px] text-success">
              + $212 vs yesterday
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-6 pt-10 pb-16 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <span className="text-[10.5px] font-bold tracking-[1.4px] text-[#5B6474]">
          TRUSTED BY 2,400+ INDEPENDENT SHOPS
        </span>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-heading text-[15px] font-semibold tracking-[0.6px] text-[#7C8798]"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
