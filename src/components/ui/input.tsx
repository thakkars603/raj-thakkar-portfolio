import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      suppressHydrationWarning
      className={cn(
        "h-11 w-full rounded-md bg-bg px-3.5 text-base text-fg shadow-[var(--shadow-border)]",
        "placeholder:text-muted",
        "transition-[box-shadow] duration-150 ease-out",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});
