import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDateString(): string {
  const date = new Date();
  const weekday = new Intl.DateTimeFormat([], { weekday: "long" }).format(date);
  const month = new Intl.DateTimeFormat([], { month: "long" }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();

  return `${weekday}, ${month} ${day}, ${year}`;
}

export function getCurrentTimeString(): string {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0"); // Add leading zero for single-digit hours
  const minute = String(date.getMinutes()).padStart(2, "0"); // Add leading zero for single-digit minutes

  return `${hour}:${minute}`;
}
