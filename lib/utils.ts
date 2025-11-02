import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper for asset paths (no basePath needed for GitHub Pages docs folder)
export function assetPath(path: string): string {
  return path
}
