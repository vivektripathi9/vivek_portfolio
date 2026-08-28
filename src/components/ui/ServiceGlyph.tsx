import type { ServiceIconName } from "@/data/services";

type ServiceGlyphProps = {
  name: ServiceIconName;
  className?: string;
};

function Glyph({ name }: { name: ServiceIconName }) {
  switch (name) {
    case "bag":
      return (
        <>
          <path d="M6 8h12l-1.1 12.2a1 1 0 0 1-1 .8H8.1a1 1 0 0 1-1-.8L6 8z" />
          <path d="M9 8V6.8A3 3 0 0 1 15 6.8V8" />
        </>
      );
    case "layers":
      return (
        <>
          <path d="m12 4 8 4-8 4-8-4 8-4z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </>
      );
    case "bolt":
      return <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7z" />;
    case "grid":
      return (
        <>
          <rect x="4" y="4" width="7" height="7" rx="0.5" />
          <rect x="13" y="4" width="7" height="7" rx="0.5" />
          <rect x="4" y="13" width="7" height="7" rx="0.5" />
          <rect x="13" y="13" width="7" height="7" rx="0.5" />
        </>
      );
    case "server":
      return (
        <>
          <rect x="3" y="5" width="18" height="5" rx="1" />
          <rect x="3" y="14" width="18" height="5" rx="1" />
          <path d="M7 7.5h.01M7 16.5h.01" />
        </>
      );
    case "plug":
      return (
        <>
          <path d="M8 3v5M16 3v5" />
          <path d="M7 8h10v4a5 5 0 0 1-10 0V8z" />
          <path d="M12 17v4" />
        </>
      );
    case "paint":
      return (
        <>
          <path d="M12 3c3.8 0 7 2.2 7 5.2 0 2.6-2.2 4.4-4.4 4.4-1.1 0-1.8.6-1.8 1.5 0 1.5-1.2 2.7-2.7 2.7S7.4 15.6 7.4 14.1C7.4 8.8 12 7.2 12 3z" />
          <path d="M8 20h.01" />
        </>
      );
    case "gauge":
      return (
        <>
          <path d="M5.5 19a8.2 8.2 0 1 1 13 0" />
          <path d="M12 12.5 16 9" />
          <path d="M12 12.5h.01" />
        </>
      );
    case "spark":
      return (
        <>
          <path d="M12 3v4M12 17v4M5 6.5 7.8 9.3M16.2 14.7 19 17.5M3 12h4M17 12h4M5 17.5 7.8 14.7M16.2 9.3 19 6.5" />
        </>
      );
    case "clipboard":
      return (
        <>
          <rect x="7" y="5" width="10" height="16" rx="1.5" />
          <path d="M9 5V4h6v1" />
          <path d="M10 11h4M10 15h4" />
        </>
      );
    case "code":
      return (
        <>
          <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
        </>
      );
    case "rocket":
      return (
        <>
          <path d="M12 3c2.8 2.6 4 6.2 4 9.5L12 20l-4-7.5C8 9.2 9.2 5.6 12 3z" />
          <path d="M12 11h.01M9.5 20h5" />
        </>
      );
    case "chat":
      return <path d="M5 6h14v9H8l-3 3V6z" />;
    case "check":
      return <path d="M5 13 9 17 19 7" />;
    case "refresh":
      return (
        <>
          <path d="M21 12a9 9 0 1 1-2.6-6.4" />
          <path d="M21 4v6h-6" />
        </>
      );
    case "pages":
      return (
        <>
          <rect x="6" y="4" width="12" height="16" rx="1" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </>
      );
    case "repeat":
      return (
        <>
          <path d="M17 1v4H7a4 4 0 0 0-4 4v2" />
          <path d="m17 1 3 3-3 3" />
          <path d="M7 23v-4h10a4 4 0 0 0 4-4v-2" />
          <path d="m7 23-3-3 3-3" />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </>
      );
    case "calendar":
      return (
        <>
          <rect x="4" y="5" width="16" height="16" rx="1.5" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </>
      );
    default:
      return null;
  }
}

export function ServiceGlyph({ name, className = "h-5 w-5" }: ServiceGlyphProps) {
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
      <Glyph name={name} />
    </svg>
  );
}
