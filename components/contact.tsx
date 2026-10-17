"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const details = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hello@invenstory.io",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+31 10 555 0182",
  },
  {
    icon: MapPin,
    label: "OFFICE",
    value: "Scheepmakershaven 24, Rotterdam",
  },
  {
    icon: Timer,
    label: "HOURS",
    value: "Mon–Fri · 08:00–18:00 CET",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[60px] right-0 h-[620px] w-[480px] rounded-full bg-[linear-gradient(120deg,#1F66F5_0%,#C79BE0_100%)] opacity-15"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-24 lg:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="flex max-w-[560px] flex-col gap-3">
            <span className="text-[11px] font-bold tracking-[1.8px] text-[#5B6474]">
              CONTACT
            </span>
            <h2 className="font-heading text-[32px] leading-[1.15] font-bold tracking-[-1px] text-ink sm:text-[40px] sm:leading-[46px]">
              Tell us what your shelves look like.
            </h2>
          </div>
          <p className="max-w-[400px] text-[13.5px] leading-[22px] text-muted-foreground">
            We answer every message within one working day — usually with a straight
            answer, not a demo request.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_392px]">
          <Card className="gap-[18px] rounded-[20px] p-6 shadow-[0px_18px_44px_#0B2E6B1A] ring-1 ring-line sm:p-[34px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[7px]">
                <Label
                  htmlFor="contact-name"
                  className="text-[11.5px] font-semibold text-ink"
                >
                  Full name
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Marie Jansen"
                  className="h-[46px] rounded-[9px] border-line bg-[#F9FBFF] px-3.5 text-[13px] placeholder:text-[#8A94A6]"
                />
              </div>

              <div className="flex flex-col gap-[7px]">
                <Label
                  htmlFor="contact-email"
                  className="text-[11.5px] font-semibold text-ink"
                >
                  Work email
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="marie@noordhardware.nl"
                  className="h-[46px] rounded-[9px] border-line bg-[#F9FBFF] px-3.5 text-[13px] placeholder:text-[#8A94A6]"
                />
              </div>

              <div className="flex flex-col gap-[7px]">
                <Label
                  htmlFor="contact-shops"
                  className="text-[11.5px] font-semibold text-ink"
                >
                  How many shops do you run?
                </Label>
                <Input
                  id="contact-shops"
                  name="shops"
                  placeholder="1–3 shops"
                  className="h-[46px] rounded-[9px] border-line bg-[#F9FBFF] px-3.5 text-[13px] placeholder:text-[#8A94A6]"
                />
              </div>

              <div className="flex flex-col gap-[7px]">
                <Label
                  htmlFor="contact-message"
                  className="text-[11.5px] font-semibold text-ink"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="We run three shops and still count stock on paper. Where would we start?"
                  className="min-h-[112px] resize-none rounded-[9px] border-line bg-[#F9FBFF] px-3.5 py-3 text-[13px] leading-[21px] placeholder:text-[#8A94A6]"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button
                  type="submit"
                  className="h-11 gap-2.5 rounded-[9px] px-6 text-[13.5px] font-semibold shadow-[0px_10px_22px_#1F66F53D]"
                >
                  Send message <Send className="size-[15px]" />
                </Button>
                <span className="text-[10.5px] text-[#6B7280]">
                  No newsletters. No sales sequences.
                </span>
              </div>

              {submitted ? (
                <p
                  role="status"
                  className="rounded-lg bg-brand-soft px-3.5 py-3 text-[12px] text-ink"
                >
                  This is a demo build — the form UI works, but no backend is
                  connected, so nothing was sent.
                </p>
              ) : null}
            </form>
          </Card>

          <div className="flex flex-col gap-2 pt-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3.5 border-b border-[#EDF1F8] py-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#DCE7FB] bg-secondary">
                  <Icon className="size-[17px] text-primary" strokeWidth={1.9} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold tracking-[1.2px] text-[#6B7280]">
                    {label}
                  </span>
                  <span className="text-[13.5px] font-medium text-ink">
                    {value}
                  </span>
                </div>
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-2 rounded-[16px] bg-[#0F172A] p-[22px]">
              <h3 className="font-heading text-[15px] font-semibold text-white">
                Prefer to talk it through?
              </h3>
              <p className="text-[12px] leading-[19px] text-[#B6C0D0]">
                Book a 20-minute walkthrough. We will map your inbound, outbound
                and margin flow live on the call.
              </p>
              <a
                href="mailto:hello@invenstory.io?subject=Walkthrough"
                className="mt-1 inline-flex w-fit items-center gap-[7px] text-[12.5px] font-semibold text-cyan hover:underline"
              >
                Book a walkthrough
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
