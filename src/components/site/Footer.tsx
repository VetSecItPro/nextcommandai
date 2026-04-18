import Monogram from "./Monogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-ink px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <Monogram className="h-7 w-7 text-brass" />
            <span className="text-[0.72rem] uppercase tracking-[0.28em] text-parchment-dim">
              Next Command AI Consulting, LLC
            </span>
          </div>
          <p className="font-display mt-8 max-w-md text-[1.2rem] font-light italic leading-snug text-parchment md:text-[1.35rem]">
            Secure AI, cybersecurity &amp; technology modernization — for the
            missions that matter.
          </p>
        </div>

        <div>
          <p className="eyebrow">Site</p>
          <div className="hairline rule-draw mt-3 w-10" />
          <ul className="mt-6 space-y-3 text-[0.95rem] text-parchment-dim">
            <li>
              <a href="#capabilities" className="transition-colors hover:text-brass">
                Capabilities
              </a>
            </li>
            <li>
              <a href="#served" className="transition-colors hover:text-brass">
                Who We Serve
              </a>
            </li>
            <li>
              <a href="#approach" className="transition-colors hover:text-brass">
                Approach
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-brass">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Office of Record</p>
          <div className="hairline rule-draw mt-3 w-10" />
          <address className="mt-6 space-y-2 text-[0.95rem] not-italic leading-[1.7] text-parchment-dim">
            <div>United States</div>
            <a
              href="mailto:contact@nextcommandai.com"
              className="block transition-colors hover:text-brass"
            >
              contact@nextcommandai.com
            </a>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col gap-4 border-t border-hairline pt-8 text-[0.8rem] uppercase tracking-[0.22em] text-parchment-faint md:flex-row md:items-center md:justify-between">
        <span>&copy; {year} Next Command AI Consulting, LLC. All rights reserved.</span>
        <span className="text-brass-dim">Veteran-Owned &middot; United States</span>
      </div>
    </footer>
  );
}
