import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  size = "md",
  tagline = true,
  light = false,
  className,
}: {
  size?: "md" | "sm";
  tagline?: boolean;
  light?: boolean;
  className?: string;
}) {
  const mark = size === "md" ? "size-10" : "size-[34px]";
  const glyph = size === "md" ? "size-5" : "size-[17px]";

  return (
    <div className={cn("flex shrink-0 items-center gap-3", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0px_6px_16px_#1F66F552]",
          mark,
        )}
      >
        <Boxes className={glyph} strokeWidth={1.75} aria-hidden />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-bold tracking-[1.3px] whitespace-nowrap",
            light ? "text-white" : "text-ink",
            size === "md" ? "text-[17px]" : "text-[15px]",
          )}
        >
          INVENSTORY
        </span>
        {tagline ? (
          <span
            className={cn(
              "text-[8.5px] font-semibold tracking-[1.6px] whitespace-nowrap",
              light ? "text-cyan" : "text-[#0B3B52]",
            )}
          >
            INVENTORY · PROFIT
          </span>
        ) : null}
      </div>
    </div>
  );
}
