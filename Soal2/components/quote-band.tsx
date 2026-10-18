import { Quote } from "lucide-react";

const stats = [
  { value: "38 hrs", label: "saved per month" },
  { value: "2.4%", label: "less shrinkage" },
  { value: "11 min", label: "to close the day" },
];

export function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[120px] -left-[180px] size-[520px] rounded-full bg-primary opacity-25 blur-[40px]" />
        <div className="absolute top-[120px] right-[140px] size-[520px] rounded-full bg-violet opacity-25 blur-[45px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center gap-[22px] px-6 py-16 text-center lg:px-0 lg:py-[66px]">
        <Quote className="size-[30px] text-cyan" aria-hidden />
        <blockquote className="max-w-[880px] font-heading text-xl leading-[1.5] font-medium tracking-[-0.4px] text-white italic sm:text-[26px] sm:leading-[39px]">
          “We stopped opening the spreadsheet on Monday morning, because the
          number was already on the screen on Sunday night.”
        </blockquote>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-cyan">
            <span className="font-heading text-[13px] font-bold text-[#0B2430]">
              MV
            </span>
          </div>
          <div className="text-left">
            <p className="text-[13px] font-semibold text-white">
              Marijke de Vries
            </p>
            <p className="text-[11.5px] text-[#AEB8C8]">
              Owner, Noord Hardware · 2 shops, Rotterdam
            </p>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-8 border-t border-white/15 pt-[18px] sm:gap-10">
          {stats.map((stat, index) => (
            <div key={stat.value} className="flex items-center gap-8 sm:gap-10">
              {index > 0 ? (
                <span className="hidden h-[34px] w-px bg-white/15 sm:block" />
              ) : null}
              <div className="flex flex-col items-center gap-[3px]">
                <span className="font-heading text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] text-[#AEB8C8]">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
