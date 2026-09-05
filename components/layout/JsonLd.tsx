import { offices, people, site } from "@/lib/content";
import { siteUrl } from "@/lib/utils/site-url";

/** Organization and LocalBusiness structured data from the real contact details. */
export function JsonLd() {
  const lagos = offices.find((office) => office.id === "lagos");
  const address = {
    "@type": "PostalAddress",
    streetAddress: "No. 3 Jasmine Road, Ikota GRA",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: "NG",
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl.origin}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: siteUrl.origin,
    logo: `${siteUrl.origin}${site.mark.src}`,
    email: site.email,
    telephone: site.phoneDisplay,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Corporate Affairs Commission registration",
      value: site.registration,
    },
    address,
    areaServed: ["NG", "GB"],
    employee: people.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.title,
    })),
  };
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl.origin}/#lagos`,
    name: site.name,
    parentOrganization: { "@id": `${siteUrl.origin}/#organization` },
    url: siteUrl.origin,
    email: site.email,
    telephone: site.phoneDisplay,
    address,
    description: lagos?.description,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
