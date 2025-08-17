import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix asset paths with the Vite base (works for GitHub Pages subpaths)
export function withBase(p: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^\//, "");
}
