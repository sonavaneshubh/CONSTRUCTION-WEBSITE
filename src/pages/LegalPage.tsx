import ScrollReveal from "../components/ScrollReveal";
import PageIntro from "../components/PageIntro";
import { usePageMeta } from "../hooks/usePageMeta";
import { company } from "../data/company";

interface Props {
  type: "privacy" | "terms";
}

const legalContent = {
  privacy: {
    eyebrow: "Legal Information",
    title: "Privacy Policy",
    intro:
      "This page explains what happens to information you choose to share when you use this website or contact G A Palve and Company.",
    sections: [
      {
        title: "Information You Provide",
        copy: "Project details typed into the inquiry form remain in your browser until you choose to copy and paste them into WhatsApp or send them by email. This website does not transmit form contents to a server or store them.",
      },
      {
        title: "WhatsApp Enquiries",
        copy: `The WhatsApp button opens WhatsApp with a general message. Any details you paste there are sent through WhatsApp and are governed by WhatsApp's own privacy terms. Please avoid sharing sensitive information you do not want to send by messaging app.`,
      },
      {
        title: "Calls, Email and Office Visits",
        copy: `If you call ${company.phone}, email ${company.email}, or visit us at ${company.address}, the information you provide is used to respond to your enquiry and discuss possible work.`,
      },
      {
        title: "Website Information",
        copy: "This is a static informational website with no analytics or advertising tracking scripts. Standard technical request data may be recorded by the hosting provider to keep the site available and secure.",
      },
      {
        title: "Updates and Contact",
        copy: "This policy may be updated as our practices change. For questions about how your information is handled, contact us using the details above or via the Contact page.",
      },
    ],
  },
  terms: {
    eyebrow: "Legal Information",
    title: "Terms & Conditions",
    intro:
      "These terms explain how to use this website and how the information on it should be understood.",
    sections: [
      {
        title: "Website Use",
        copy: "This website is provided for general information about G A Palve and Company, our services and project work. Please use it responsibly and avoid interfering with its operation.",
      },
      {
        title: "No Binding Offer",
        copy: "Project descriptions, images, figures and service information are illustrative. They are not a quotation, warranty or contractual offer. Scope, pricing and timelines are confirmed only through a written agreement.",
      },
      {
        title: "External Links",
        copy: "Links to WhatsApp and Google Maps are provided for convenience. Those services are operated by third parties and their content and practices are managed by the relevant providers.",
      },
      {
        title: "Intellectual Property",
        copy: "Text, layout and project imagery on this website belong to G A Palve and Company or are used with permission. Please do not reproduce them without prior written consent.",
      },
      {
        title: "Contact",
        copy: `For clarification about any information on this website, email ${company.email}, call ${company.phone}, or use the Contact page.`,
      },
    ],
  },
};

export default function LegalPage({ type }: Props) {
  const content = legalContent[type];

  usePageMeta({
    title: content.title,
    description: content.intro,
    path: type === "privacy" ? "/privacy-policy" : "/terms-conditions",
  });

  return (
    <div className="interior-page">
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.intro}
      />

      <section className="page-intro-content section-pad">
        <div className="site-container">
          <ScrollReveal>
            <div className="panel mx-auto max-w-4xl">
              <div className="card-body">
                <div className="grid gap-5 border-t border-[#FFB800]/25 pt-6 md:grid-cols-2">
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
