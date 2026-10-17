"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    if (!email.trim() || !password) {
      setError("Enter your email and password to continue.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    setNotice(
      "Authentication is not connected in this build. No credentials were sent.",
    );
  }

  return (
    <Card className="gap-0 rounded-[20px] border-0 p-6 shadow-[0px_18px_44px_#0B2E6B1A] ring-1 ring-line sm:p-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="font-heading text-2xl font-bold tracking-[-0.5px] text-ink">
          Welcome back
        </h1>
        <p className="text-[13.5px] leading-5 text-muted-foreground">
          Sign in to see today&apos;s stock, sales and profit.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="login-email"
            className="text-[11.5px] font-semibold text-ink"
          >
            Work email
          </Label>
          <Input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="marie@noordhardware.nl"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(error) && !email.trim()}
            className="h-11 rounded-[9px] border-line bg-[#F9FBFF] px-3.5 text-[13px] placeholder:text-[#8A94A6]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="login-password"
              className="text-[11.5px] font-semibold text-ink"
            >
              Password
            </Label>
            <button
              type="button"
              onClick={() =>
                setNotice("Password reset is not available in this demo build.")
              }
              className="text-[11px] font-semibold text-primary hover:underline"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Input
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-invalid={Boolean(error) && !password}
              className="h-11 rounded-[9px] border-line bg-[#F9FBFF] px-3.5 pr-11 text-[13px] placeholder:text-[#8A94A6]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-muted-foreground hover:text-ink"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Checkbox
            id="login-remember"
            checked={remember}
            onCheckedChange={(checked) => setRemember(checked === true)}
          />
          <Label
            htmlFor="login-remember"
            className="text-[12px] font-normal text-muted-foreground"
          >
            Keep me signed in on this device
          </Label>
        </div>

        {error ? (
          <p role="alert" className="text-[12px] font-medium text-destructive">
            {error}
          </p>
        ) : null}

        {notice ? (
          <p
            role="status"
            className="rounded-lg bg-brand-soft px-3.5 py-3 text-[12px] leading-[18px] text-ink"
          >
            {notice}
          </p>
        ) : null}

        <Button
          type="submit"
          className="h-11 w-full rounded-[9px] text-[13.5px] font-semibold shadow-[0px_10px_22px_#1F66F53D]"
        >
          Sign in
        </Button>
      </form>

      <div className="mt-5 flex items-center justify-center gap-1 border-t border-line pt-5 text-[12px] text-muted-foreground">
        New to Invenstory?
        <Link
          href="/#pricing"
          className="font-semibold text-primary hover:underline"
        >
          Start a 14-day trial
        </Link>
      </div>
    </Card>
  );
}
