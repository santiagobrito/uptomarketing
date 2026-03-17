interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Up To Marketing",
        url: "https://uptomarketing.com",
        logo: "https://uptomarketing.com/logo-utm.svg",
        description: "Consultora de marketing digital especializada en despachos profesionales.",
        email: "hola@uptomarketing.com",
        founder: {
          "@type": "Person",
          name: "Santiago Brito",
          url: "https://www.linkedin.com/in/santiagobrito/",
          jobTitle: "Fundador",
        },
        sameAs: [
          "https://www.linkedin.com/in/santiagobrito/",
        ],
      }}
    />
  );
}

export function ServiceJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        provider: {
          "@type": "Organization",
          name: "Up To Marketing",
          url: "https://uptomarketing.com",
        },
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Person",
          name: authorName,
          url: "https://www.linkedin.com/in/santiagobrito/",
          jobTitle: "Fundador de Up To Marketing",
        },
        publisher: {
          "@type": "Organization",
          name: "Up To Marketing",
          url: "https://uptomarketing.com",
        },
      }}
    />
  );
}
