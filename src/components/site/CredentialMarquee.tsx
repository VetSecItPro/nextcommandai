const items: { label: string; value?: string }[] = [
  { label: "UEI", value: "SBZNFKA3ZPD8" },
  { label: "UEI Verified" },
  { label: "CAGE", value: "18XN2" },
  { label: "CAGE Code Active" },
  { label: "Texas VetHub Approved" },
  { label: "SDVOSB" },
  { label: "SAM Registered" },
  { label: "Texas-Based" },
  { label: "Nationwide Support" },
];

function Item({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      {value ? (
        <>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-parchment-faint">
            {label}
          </span>
          <span className="text-[0.78rem] tracking-[0.18em] text-parchment">
            {value}
          </span>
        </>
      ) : (
        <span className="text-[0.78rem] uppercase tracking-[0.22em] text-parchment-dim">
          {label}
        </span>
      )}
    </div>
  );
}

export default function CredentialMarquee() {
  return (
    <div
      className="marquee-wrapper relative overflow-hidden border-b border-hairline bg-ink py-3.5"
      aria-label="Federal contracting credentials"
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-10">
            <Item {...it} />
            <span className="h-1 w-1 shrink-0 rounded-full bg-brass/60" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
