export type Lang = "pl" | "en";

export type Content = {
  lang: Lang;
  path: string;
  switchTo: { lang: Lang; path: string; label: string; ariaLabel: string };
  meta: { title: string; description: string; ogLocale: string };
  hero: { kicker: string; name: string; tagline: string; intro: string };
  work: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  stack: {
    label: string;
    heading: string;
    items: { name: string; role: string }[];
  };
  contact: {
    label: string;
    heading: string;
    emailLead: string;
    codeLead: string;
    codeLinkText: string;
    codeTail: string;
  };
  footer: { label: string; name: string; nip: string; regon: string; city: string };
};

const legal = {
  name: "Anton Morozov Software Development",
  nip: "NIP: 5223379772",
  regon: "REGON: 545339452",
};

export const pl: Content = {
  lang: "pl",
  path: "/",
  switchTo: { lang: "en", path: "/en/", label: "English", ariaLabel: "Switch to English" },
  meta: {
    title: "Anton Morozov Software Development",
    description:
      "Programista w Warszawie. Projektuję i buduję aplikacje internetowe dla firm produktowych w UE — długoterminowo, zdalnie, w modelu B2B.",
    ogLocale: "pl_PL",
  },
  hero: {
    kicker: "Programista · Warszawa, Polska",
    name: "Anton Morozov",
    tagline: "Software Development",
    intro:
      "Projektuję i buduję aplikacje internetowe dla firm produktowych w UE — zdalnie, na podstawie długoterminowych umów B2B, jednoosobowo.",
  },
  work: {
    label: "Praca",
    heading: "Czym się zajmuję",
    paragraphs: [
      "Buduję aplikacje internetowe od początku do końca: frontendy, API i usługi backendowe, schematy baz danych, integracje z systemami zewnętrznymi oraz wdrożenie. Jedna osoba prowadzi pracę od pierwszego projektu do działającego oprogramowania.",
      "Pracuję jako członek zespołu produktowego klienta w ramach długoterminowej współpracy — biorę udział w planowaniu, odpowiadam za funkcje aż do wdrożenia produkcyjnego i utrzymuję to, co dostarczam.",
      "Zakres usług to tworzenie oprogramowania na zamówienie, tworzenie aplikacji internetowych oraz towarzyszące im doradztwo techniczne. Współpraca odbywa się zdalnie, na podstawie umów, z firmami z UE.",
    ],
  },
  stack: {
    label: "Technologie",
    heading: "Z czego korzystam",
    items: [
      { name: "TypeScript", role: "Język roboczy, zarówno po stronie frontendu, jak i backendu." },
      { name: "React", role: "Interfejsy użytkownika." },
      { name: "Next.js", role: "Frontendy aplikacji internetowych." },
      { name: "tRPC", role: "Typowane API między frontendem a backendem." },
      { name: "PostgreSQL", role: "Modelowanie danych, schematy i przechowywanie." },
    ],
  },
  contact: {
    label: "Kontakt",
    heading: "Napisz do mnie",
    emailLead: "Najprościej skontaktować się ze mną mailowo: ",
    codeLead: "Kod znajduje się na ",
    codeLinkText: "GitHubie",
    codeTail: ".",
  },
  footer: { label: "Dane rejestrowe", ...legal, city: "Warszawa, Polska" },
};

export const en: Content = {
  lang: "en",
  path: "/en/",
  switchTo: { lang: "pl", path: "/", label: "Polski", ariaLabel: "Przełącz na polski" },
  meta: {
    title: "Anton Morozov Software Development",
    description:
      "Software developer in Warszawa, Poland. I design and build web applications for product companies in the EU — long-term, remote, B2B engagements.",
    ogLocale: "en_US",
  },
  hero: {
    kicker: "Software developer · Warszawa, Poland",
    name: "Anton Morozov",
    tagline: "Software Development",
    intro:
      "I design and build web applications for product companies in the EU — working remotely, on long‑term B2B contracts, as one person.",
  },
  work: {
    label: "Work",
    heading: "What I do",
    paragraphs: [
      "I build web applications end to end: frontends, APIs and backend services, database schemas, third‑party integrations, and deployment. One person carries the work from first design to running software.",
      "I work as an embedded member of a client’s product team on long‑term engagements — joining planning, owning features through to production, and maintaining what I ship.",
      "The work is custom software development, web application development, and the technical consulting that goes with them. Engagements are remote, contract‑based, for companies in the EU.",
    ],
  },
  stack: {
    label: "Stack",
    heading: "What I work with",
    items: [
      { name: "TypeScript", role: "The working language, across frontend and backend." },
      { name: "React", role: "User interfaces." },
      { name: "Next.js", role: "Web application frontends." },
      { name: "tRPC", role: "Typed APIs between frontend and backend." },
      { name: "PostgreSQL", role: "Data modelling, schemas, and storage." },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Get in touch",
    emailLead: "Email is the direct way to reach me: ",
    codeLead: "Code is on ",
    codeLinkText: "GitHub",
    codeTail: ".",
  },
  footer: { label: "Dane rejestrowe", ...legal, city: "Warszawa, Polska" },
};
