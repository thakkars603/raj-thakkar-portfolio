import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      suppressHydrationWarning
      className={cn(
        "min-h-32 w-full resize-y rounded-lg bg-bg px-3.5 py-3 text-base text-fg shadow-[var(--shadow-border)]",
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
