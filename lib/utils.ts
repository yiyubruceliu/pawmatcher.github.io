import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to add basePath for GitHub Pages
const BASE_PATH = '/pawmatcher.github.io'

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`
}
