import PageBanner from "../components/PageBanner";
import ScrollReveal from "../components/ScrollReveal";

interface Props {
  type: "privacy" | "terms";
}

const legalContent = {
  privacy: {
    eyebrow: "Legal Information",
    title: "Privacy Policy",
    intro:
      "This page provides a general overview of how information may be handled when you use this website or contact us.",
    sections: [
      {
        title: "Information You Provide",
        copy: "Details submitted through forms, email, phone, or other direct communication may be used to respond to enquiries and discuss potential work.",
      },
      {
        title: "Website Information",
        copy: "Standard browser and device information may be collected automatically to help maintain the website and understand how pages are used.",
      },
      {
        title: "Use of Information",
        copy: "Information may be used to answer requests, improve website content, and support ordinary business communication. Contact us for details about current practices.",
      },
      {
        title: "Updates",
        copy: "This overview may be updated from time to time. Please revisit this page for the current version.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal Information",
    title: "Terms & Conditions",
    intro:
      "These notes offer general guidance for using this website and explain how website information should be understood.",
    sections: [
      {
        title: "Website Use",
        copy: "This website is provided for general information about services, projects, and contact details. Please use it responsibly and avoid interfering with its operation.",
      },
      {
        title: "Content",
        copy: "Information on this website is offered as a general guide. Project details, specifications, and availability may change as work requirements are reviewed.",
      },
      {
        title: "External Links",
        copy: "Links to third-party websites are provided for convenience. Their content and practices are managed by the relevant providers.",
      },
      {
        title: "Enquiries",
        copy: "For clarification about any information on this website, please contact us using the details on the Contact page.",
      },
    ],
  },
};

export default function LegalPage({ type }: Props) {
  const content = legalContent[type];

  return (
    <div className="bg-[#FAFAF8] text-[#4A4F55]">
      <PageBanner
        tag={content.eyebrow}
        title={content.title}
        subtitle={content.intro}
        image="/images/hero/highway.jpg"
      />

      <section className="section-pad">
        <div className="site-container">
          <ScrollReveal>
            <div className="panel mx-auto max-w-4xl">
              <div className="card-body">
                <div className="grid gap-4 border-t border-[#FFB800]/25 pt-6 md:grid-cols-2">
                  {content.sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="font-heading text-lg font-bold text-[#242620]">
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-[#666C73]">
                        {section.copy}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
