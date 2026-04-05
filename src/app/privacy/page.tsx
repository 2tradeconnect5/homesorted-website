import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HomeSorted's privacy policy. Learn how we collect, use, and protect your personal data in compliance with GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-page-bg to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-grey-text">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                1. Introduction
              </h2>
              <p className="text-grey-text leading-relaxed">
                HomeSorted (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                operates the HomeSorted platform including our website
                (homesorted.ie) and WhatsApp-based services. We are committed to
                protecting your privacy and operate in full compliance with the
                General Data Protection Regulation (GDPR) and Irish data
                protection law.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                2. What We Collect
              </h2>
              <p className="text-grey-text leading-relaxed mb-3">
                We collect the following personal information when you use our
                services:
              </p>
              <ul className="list-disc list-inside text-grey-text space-y-2 leading-relaxed">
                <li>
                  <strong>Identity data:</strong> Name, email address, phone
                  number
                </li>
                <li>
                  <strong>Location data:</strong> Eircode and general area for
                  job matching
                </li>
                <li>
                  <strong>Job details:</strong> Descriptions, photos, and
                  preferences you provide
                </li>
                <li>
                  <strong>Communication history:</strong> Messages exchanged via
                  WhatsApp with our AI personas (Emma and Casey)
                </li>
                <li>
                  <strong>Trade credentials:</strong> For tradespeople —
                  business name, insurance details, qualifications
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                3. How We Use Your Data
              </h2>
              <ul className="list-disc list-inside text-grey-text space-y-2 leading-relaxed">
                <li>
                  Match homeowners with verified tradespeople based on job
                  requirements and location
                </li>
                <li>
                  Facilitate communication between parties via our AI-assisted
                  platform
                </li>
                <li>
                  Improve our AI models and matching algorithms to provide better
                  service
                </li>
                <li>
                  Generate anonymised analytics to improve the platform
                  experience
                </li>
                <li>
                  Send service-related notifications (job updates, quotes, review
                  requests)
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                4. Data Sharing
              </h2>
              <p className="text-grey-text leading-relaxed mb-3">
                We share relevant job details (description, location area,
                photos) with matched tradespeople to enable quoting. We{" "}
                <strong>never sell</strong> your personal data to third parties.
              </p>
              <p className="text-grey-text leading-relaxed">
                Partners (property managers and landlords) see limited data only
                — first name and job status. They do not receive your phone
                number, email address, or full address, in compliance with GDPR
                data minimisation principles.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                5. Your Rights
              </h2>
              <p className="text-grey-text leading-relaxed mb-3">
                Under GDPR, you have the following rights regarding your personal
                data:
              </p>
              <ul className="list-disc list-inside text-grey-text space-y-2 leading-relaxed">
                <li>
                  <strong>Access:</strong> Request a copy of the data we hold
                  about you
                </li>
                <li>
                  <strong>Rectification:</strong> Ask us to correct inaccurate
                  data
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Restriction:</strong> Ask us to limit how we process
                  your data
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your data
                  for specific purposes
                </li>
              </ul>
              <p className="text-grey-text leading-relaxed mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@homesorted.ie"
                  className="text-primary hover:underline"
                >
                  privacy@homesorted.ie
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Cookies</h2>
              <p className="text-grey-text leading-relaxed">
                We use <strong>essential cookies</strong> required for the
                website to function (session management, security). We also use{" "}
                <strong>analytics cookies</strong> (with your consent) to
                understand how visitors use our site. You can manage your cookie
                preferences at any time via the cookie banner or by contacting
                us.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                7. Data Retention
              </h2>
              <ul className="list-disc list-inside text-grey-text space-y-2 leading-relaxed">
                <li>
                  <strong>Active accounts:</strong> Data is retained for as long
                  as your account is active
                </li>
                <li>
                  <strong>Completed jobs:</strong> Job records are retained for
                  24 months after completion for warranty and dispute resolution
                  purposes
                </li>
                <li>
                  <strong>Deletion:</strong> You may request deletion of your
                  data at any time. We will process requests within 30 days,
                  subject to legal obligations
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                8. Contact
              </h2>
              <p className="text-grey-text leading-relaxed">
                If you have any questions about this privacy policy or how we
                handle your data, please contact our Data Protection team at{" "}
                <a
                  href="mailto:privacy@homesorted.ie"
                  className="text-primary hover:underline"
                >
                  privacy@homesorted.ie
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
