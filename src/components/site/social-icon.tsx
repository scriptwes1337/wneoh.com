import { Mail } from "lucide-react";

export function SocialIcon({
  name,
  size = 18,
}: {
  name: string;
  size?: number;
}) {
  if (name === "Email") return <Mail size={size} strokeWidth={1.5} />;
  const paths: Record<string, React.ReactNode> = {
    X: (
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.5 5.4 22H2.2l7.5-8.7L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
    ),
    LinkedIn: (
      <>
        <path d="M5 8H2v14h3V8ZM3.5 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 8H7v14h3v-8c0-4 5-4 5 0v8h3v-9c0-6-6-6-8-3V8Z" />
      </>
    ),
    GitHub: (
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-3 .7-3.6-1.3-3.6-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.2 10.2 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.5 5-4.9 5.3.4.4.7 1 .7 2v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    ),
    Instagram: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
