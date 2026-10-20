export default function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M14.2 8.4h2.3V5.2h-2.3c-2.4 0-4.3 1.9-4.3 4.3v1.8H7.6v3.2h2.3v7.3h3.3v-7.3h2.4l.5-3.2h-2.9V9.5c0-.6.4-1.1 1-1.1Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.4 15 12l-4.5 2.6V9.4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
