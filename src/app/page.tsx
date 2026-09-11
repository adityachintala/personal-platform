import { execSync } from "node:child_process";

import Image from "next/image";

const DATE_PUBLISHED = "2026-07-10";

function getDateModified(): string {
  try {
    return execSync("git log -1 --format=%cI", { cwd: process.cwd() })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString();
  }
}

export default function Home() {
  const dateModified = getDateModified();
  const formattedDateModified = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateModified));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    datePublished: DATE_PUBLISHED,
    dateModified,
    mainEntity: {
      "@type": "Person",
      name: "Aditya Chintala",
      sameAs: ["https://www.linkedin.com/in/aditya-chintala/"],
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="max-w-4xl text-center text-3xl leading-tight font-medium">
        Hello, I am Aditya Chintala and I ran out of AI credits.
      </h1>

      <a
        href="https://www.linkedin.com/in/aditya-chintala/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/human.png"
          alt="Donation meme"
          width={500}
          height={500}
          className="mt-10 rounded-lg shadow-lg"
        />
      </a>

      <p className="mt-6 text-sm opacity-50">
        Last updated <time dateTime={dateModified}>{formattedDateModified}</time>
      </p>
    </main>
  );
}
