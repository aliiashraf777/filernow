// app/(marketing)/contact-us/page.tsx

import { MessageCircle, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/common/form/ContactForm";
// import { FaqAccordion } from "@/components/common/FaqAccordion";
import { contactFaqData } from "@/data/contactFaqData";
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll";
import Faqs from "@/components/home/faqs/Faqs";
import AboutHero from "@/components/about/AboutHero";
import SectionContainer from "@/components/common/section/SectionContainer";
// import { RevealOnScroll } from "@/components/common/RevealOnScroll";

const contactChannelsData = [
  {
    icon: MessageCircle,
    eyebrow: "Instant Assistance",
    title: "24/7 Live WhatsApp Support",
    description: "Average response time under 5 minutes during business hours.",
  },
  {
    icon: Phone,
    eyebrow: "Direct Call",
    title: "0304 1110555",
    description: "Support line open Monday to Friday, 9:00 AM – 6:00 PM.",
  },
  {
    icon: Mail,
    eyebrow: "Email Correspondence",
    title: "support@filernow.com",
    description: "For filing questions, document requests, and general inquiries.",
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-[40vh]">

      <AboutHero
        infoBadgeLabel="Streamline Your Filing"
        heading={<>Organize Your Documents<br /><span className="text-primary">In Just 24 Hours</span></>}
        description="Whether you need to organize contracts, manage compliance paperwork, or
              streamline document workflows, FilerNow handles the sorting, indexing, and
              filing. Get expert support from our dedicated filing specialists."
        aboutHeroImg="/assets/contact/contactHero.png"
        // redBlobHidden
        aboutHeroVisualClass="aspect-520/510"
        backgroundGradient="linear-gradient(90deg, #FFE1E6 0%, rgba(148, 148, 148, 0) 100%)"
      />

      {/* Contact channels + form */}
      <SectionContainer paddingClass="container-y-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <RevealOnScroll>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Contact Channels
            </span>
            <h2 className="mt-3 text-3xl font-bold text-text-dark">
              Prefer direct communication?
              <br />
              Reach us anywhere.
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {contactChannelsData.map(({ icon: Icon, eyebrow, title, description }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {eyebrow}
                    </p>
                    <p className="mt-1 font-semibold text-text-dark">{title}</p>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="rounded-2xl border border-border-clr bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text-dark">Send us a Message</h3>
              <p className="mt-1 text-sm text-gray-500">
                Fill out the form below and a filing specialist will get in touch shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <Faqs
        faqData={contactFaqData}
        paddingClass="pt-0"
      />
    </main>
  );
}
