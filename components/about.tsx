import { PackagePlus, TrendingUp, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: PackagePlus,
    title: "Inbound tracking",
    description:
      "Log every delivery as it lands. Suppliers, batches, unit costs and landed price stay attached to the stock you actually have on the shelf.",
    meta: "Receiving · Costing",
  },
  {
    icon: Truck,
    title: "Outbound tracking",
    description:
      "Scan or punch out goods and the stock, invoice and margin update together — no end-of-day reconciliation, no guessing what left the yard.",
    meta: "Dispatch · Invoicing",
  },
  {
    icon: TrendingUp,
    title: "Profit tracking",
    description:
      "See daily margin per product, category and channel. Know which shelf pays the rent before the month closes, not after.",
    meta: "Daily margin · Per SKU",
  },
];

function StockIllustration() {
  return (
    <svg
      viewBox="0 0 440 300"
      role="img"
      aria-label="Illustration of stacked stock crates"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="crate-violet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C8AFF2" />
          <stop offset="100%" stopColor="#A791D6" />
        </linearGradient>
      </defs>

      <ellipse cx="170" cy="286" rx="95" ry="11" fill="#E2EAF8" />
      <ellipse cx="345" cy="266" rx="52" ry="8" fill="#E2EAF8" opacity="0.8" />

      {/* Big crate */}
      <polygon
        points="110,115 200,160 200,250 110,205"
        fill="#A791D6"
        stroke="#8B76BF"
        strokeWidth="1"
      />
      <polygon
        points="200,160 290,115 290,205 200,250"
        fill="#8BAEFB"
        stroke="#6F93E4"
        strokeWidth="1"
      />
      <polygon
        points="200,70 290,115 200,160 110,115"
        fill="url(#crate-violet)"
        stroke="#A791D6"
        strokeWidth="1"
      />
      <polygon points="232,86 254,97 212,118 190,107" fill="#E7DCFA" opacity="0.9" />
      <polygon points="150,172 185,189 185,216 150,199" fill="#F4F8FF" opacity="0.92" />
      <path
        d="M156 181v26M162 184v26M172 189v26"
        stroke="#B8C9F8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left crate */}
      <polygon
        points="35,205 95,235 95,285 35,255"
        fill="#8BAEFB"
        stroke="#6F93E4"
        strokeWidth="1"
      />
      <polygon
        points="95,235 155,205 155,255 95,285"
        fill="#B8D0FE"
        stroke="#94B7FC"
        strokeWidth="1"
      />
      <polygon
        points="95,175 155,205 95,235 35,205"
        fill="#CEDCFD"
        stroke="#A6C5FD"
        strokeWidth="1"
      />
      <path d="M61 218v28M78 227v28" stroke="#DCE7FD" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

      {/* Right crate */}
      <polygon
        points="305,205 345,225 345,265 305,245"
        fill="#84AAF9"
        stroke="#6A91E8"
        strokeWidth="1"
      />
      <polygon
        points="345,225 385,205 385,245 345,265"
        fill="#A6C5FD"
        stroke="#84AAF9"
        strokeWidth="1"
      />
      <polygon
        points="345,185 385,205 345,225 305,205"
        fill="#CEDCFD"
        stroke="#A6C5FD"
        strokeWidth="1"
      />
      <path d="M320 214v24" stroke="#DCE7FD" strokeWidth="3" strokeLinecap="round" opacity="0.85" />

      {/* Accents */}
      <circle cx="272" cy="62" r="5" fill="#2DD4F0" />
      <circle cx="316" cy="78" r="3" fill="#7C86E8" />
      <circle cx="86" cy="150" r="4" fill="#2DD4F0" opacity="0.7" />
      <path
        d="M330 138l6 6m0-6-6 6"
        stroke="#C8AFF2"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[420px] -left-[260px] size-[520px] rounded-full bg-brand-soft opacity-70"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-14 px-6 py-24 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-14">
          <div className="flex max-w-[552px] flex-col gap-[18px]">
            <span className="text-[11px] font-bold tracking-[1.8px] text-[#5B6474]">
              WHO WE ARE
            </span>
            <h2 className="font-heading text-[32px] leading-[1.15] font-bold tracking-[-1px] text-ink sm:text-[40px] sm:leading-[46px]">
              A clearer picture of every box and every dollar.
            </h2>
            <p className="text-[15px] leading-[26px] text-muted-foreground">
              We started Invenstory after watching a family hardware shop lose two
              weeks of margin to a stock sheet nobody trusted. So we built the
              boring, reliable system we wished they had: stock in, stock out,
              profit — counted the moment it happens, explained without a single
              spreadsheet.
            </p>
            <span className="text-[12.5px] italic text-[#6B7280]">
              — The Invenstory team, Rotterdam
            </span>
          </div>

          <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-[26px] bg-secondary sm:h-[344px]">
            <div className="absolute -top-[90px] right-0 size-[250px] rounded-full bg-white/70" />
            <div className="relative z-10 h-[260px] w-full max-w-[440px] sm:h-[300px]">
              <StockIllustration />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, meta }) => (
            <Card
              key={title}
              className="gap-3.5 rounded-[18px] p-7 shadow-[0px_12px_30px_#0B2E6B14] ring-1 ring-line"
            >
              <div className="flex size-[46px] items-center justify-center rounded-[14px] bg-brand-soft">
                <Icon className="size-[22px] text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-[17px] font-semibold text-ink">
                {title}
              </h3>
              <p className="text-[13.5px] leading-[22px] text-muted-foreground">
                {description}
              </p>
              <div className="h-px w-full bg-line" />
              <span className="text-[11px] font-semibold tracking-[0.8px] text-primary">
                {meta}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
