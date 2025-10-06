import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("container-px mx-auto w-full max-w-6xl", className)}>{children}</div>;
}
