type Props = { className?: string };

export default function Monogram({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path
        d="M12 27V13L28 27V13"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />
      <path d="M14 31h12" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
    </svg>
  );
}
