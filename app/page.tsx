const stack = [
  { name: "TypeScript", role: "The working language, across frontend and backend." },
  { name: "Next.js", role: "Web application frontends." },
  { name: "Nest.js", role: "Backend services and APIs." },
  { name: "GraphQL", role: "The API layer between frontend and backend." },
  { name: "Hasura", role: "GraphQL engine over the database." },
  { name: "PostgreSQL", role: "Data modelling, schemas, and storage." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[68rem] px-6 sm:px-10">
      <main>
        {/* Hero */}
        <section aria-label="Introduction" className="pb-16 pt-20 sm:pb-24 sm:pt-32">
          <p className="reveal reveal-1 mb-10 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
            Software developer · Warszawa, Poland
          </p>
          <h1 className="reveal reveal-2 font-display text-[clamp(2.5rem,9vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.015em]">
            Anton Morozov
            <br />
            <span className="italic text-viridian">Software Development</span>
          </h1>
          <div
            className="reveal reveal-3 mt-10 h-px w-24 bg-viridian"
            aria-hidden="true"
          />
          <p className="reveal reveal-4 mt-10 max-w-[38rem] text-lg leading-relaxed text-ink sm:text-xl">
            I design and build web applications for product companies in the
            EU&nbsp;&mdash; working remotely, on long&#8209;term B2B contracts, as
            one person.
          </p>
        </section>

        {/* Work */}
        <section
          aria-labelledby="work-heading"
          className="grid gap-6 border-t border-hairline py-14 sm:py-20 md:grid-cols-[11rem_1fr] md:gap-10"
        >
          <div className="pt-1">
            <SectionLabel>Work</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="work-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              What I do
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-ink">
              <p>
                I build web applications end to end: frontends, APIs and backend
                services, database schemas, third&#8209;party integrations, and
                deployment. One person carries the work from first design to
                running software.
              </p>
              <p>
                I work as an embedded member of a client&rsquo;s product team on
                long&#8209;term engagements &mdash; joining planning, owning
                features through to production, and maintaining what I ship.
              </p>
              <p>
                The work is custom software development, web application
                development, and the technical consulting that goes with them.
                Engagements are remote, contract&#8209;based, for companies in
                the EU.
              </p>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section
          aria-labelledby="stack-heading"
          className="grid gap-6 border-t border-hairline py-14 sm:py-20 md:grid-cols-[11rem_1fr] md:gap-10"
        >
          <div className="pt-1">
            <SectionLabel>Stack</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="stack-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              What I work with
            </h2>
            <dl className="mt-6">
              {stack.map((item) => (
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
            <SectionLabel>Contact</SectionLabel>
          </div>
          <div className="max-w-[38rem]">
            <h2 id="contact-heading" className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-6 leading-relaxed">
              Email is the direct way to reach me:{" "}
              <a
                href="mailto:anton@anton-morozov.dev"
                className="font-medium text-viridian underline decoration-viridian/40 hover:decoration-viridian"
              >
                anton@anton-morozov.dev
              </a>
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Code is on{" "}
              <a
                href="https://github.com/reconcrete"
                className="text-viridian underline decoration-viridian/40 hover:decoration-viridian"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline py-12 sm:py-16">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted">
          Dane rejestrowe
        </p>
        <div className="mt-5 space-y-1 text-sm leading-relaxed text-ink" lang="pl">
          <p>Anton Morozov Software Development</p>
          <p className="tabular-nums">NIP: 5223379772</p>
          <p className="tabular-nums">REGON: 545339452</p>
          <p>Warszawa, Polska</p>
        </div>
      </footer>
    </div>
  );
}
