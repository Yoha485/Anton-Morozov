import type { Content } from "./content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </span>
  );
}

export function Site({ c }: { c: Content }) {
  return (
    <div className="mx-auto max-w-[68rem] px-6 sm:px-10">
      <main>
        {/* Hero */}
        <section aria-label={c.hero.name} className="pb-16 pt-20 sm:pb-24 sm:pt-32">
          <div className="reveal reveal-1 mb-10 flex items-baseline justify-between gap-6">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
              {c.hero.kicker}
            </p>
            <a
              href={c.switchTo.path}
              lang={c.switchTo.lang}
              hrefLang={c.switchTo.lang}
              aria-label={c.switchTo.ariaLabel}
              className="shrink-0 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-viridian underline decoration-viridian/40 hover:decoration-viridian print:hidden"
            >
              {c.switchTo.label}
            </a>
          </div>
          <h1 className="reveal reveal-2 font-display text-[clamp(2.5rem,9vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.015em]">
            {c.hero.name}
            <br />
            <span className="italic text-viridian">{c.hero.tagline}</span>
          </h1>
          <div className="reveal reveal-3 mt-10 h-px w-24 bg-viridian" aria-hidden="true" />
          <p className="reveal reveal-4 mt-10 max-w-[38rem] text-lg leading-relaxed text-ink sm:text-xl">
            {c.hero.intro}
          </p>
        </section>

        {/* Work */}
        <section
          aria-labelledby="work-heading"
          className="grid gap-6 border-t border-hairline py-14 sm:py-20 md:grid-cols-[11rem_1fr] md:gap-10"
        >
          <div className="pt-1">
            <SectionLabel>{c.work.label}</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="work-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              {c.work.heading}
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink">
              {c.work.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section
          aria-labelledby="stack-heading"
          className="grid gap-6 border-t border-hairline py-14 sm:py-20 md:grid-cols-[11rem_1fr] md:gap-10"
        >
          <div className="pt-1">
            <SectionLabel>{c.stack.label}</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="stack-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              {c.stack.heading}
            </h2>
            <dl className="mt-6">
              {c.stack.items.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-1 border-b border-hairline py-4 first:border-t sm:grid-cols-[10rem_1fr] sm:gap-4"
                >
                  <dt className="font-medium">{item.name}</dt>
                  <dd className="text-muted">{item.role}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section
          aria-labelledby="contact-heading"
          className="grid gap-6 border-t border-hairline py-14 sm:py-20 md:grid-cols-[11rem_1fr] md:gap-10"
        >
          <div className="pt-1">
            <SectionLabel>{c.contact.label}</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="contact-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              {c.contact.heading}
            </h2>
            <p className="mt-6 leading-relaxed">
              {c.contact.emailLead}
              <a
                href="mailto:antonmorozoff64@gmail.com"
                className="font-medium text-viridian underline decoration-viridian/40 hover:decoration-viridian"
              >
                antonmorozoff64@gmail.com
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              {c.contact.codeLead}
              <a
                href="https://github.com/reconcrete"
                className="text-viridian underline decoration-viridian/40 hover:decoration-viridian"
              >
                {c.contact.codeLinkText}
              </a>
              {c.contact.codeTail}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline py-12 sm:py-16">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
          {c.footer.label}
        </p>
        <div className="mt-5 space-y-1 text-sm leading-relaxed text-ink" lang="pl">
          <p>{c.footer.name}</p>
          <p className="tabular-nums">{c.footer.nip}</p>
          <p className="tabular-nums">{c.footer.regon}</p>
          <p>{c.footer.city}</p>
        </div>
      </footer>
    </div>
  );
}
