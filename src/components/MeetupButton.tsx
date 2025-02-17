import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MeetupButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const MeetupButton = ({ className, ...props }: MeetupButtonProps) => {
  return (
    <a
      href="https://www.meetup.com/tokyo-indie-hackers/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200",
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
      Join Meetup
    </a>
  );
};
