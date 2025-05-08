import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this animation
import type { Keyframes } from "react"

export function keyframes(rules: { [time: string]: { [property: string]: string | number } }): Keyframes {
  // This is a placeholder implementation. In a real-world scenario,
  // you might use a library like 'framer-motion' or 'styled-components'
  // to handle keyframes.
  return rules as any
}
