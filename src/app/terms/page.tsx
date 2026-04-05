import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HomeSorted's terms of service. Read about the rules and guidelines that govern your use of the HomeSorted platform.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-page-bg to-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Terms of Service
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
                These Terms of Service (&quot;Terms&quot;) govern your access to
                and use of the HomeSorted platform, including our website
                (homesorted.ie) and WhatsApp-based services. By using HomeSorted,
                you agree to be bound by these Terms. If you do not agree, please
                do not use our services.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                2. Eligibility
              </h2>
              <p className="text-grey-text leading-relaxed">
                You must be at least 18 years of age and a resident of Ireland to
                use HomeSorted. By using our platform, you represent and warrant
                that you meet these requirements.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                3. Account
              </h2>
              <p className="text-grey-text leading-relaxed">
                When you interact with HomeSorted, we create a profile based on
                your WhatsApp number and the information you provide. You are
                responsible for maintaining the security of your account and for
                all activity that occurs under it. Please notify us immediately
                if you suspect any unauthorised use.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                4. Services
              </h2>
              <p className="text-grey-text leading-relaxed">
                HomeSorted is a marketplace that connects homeowners with
                verified tradespeople. We facilitate the matching, communication,
                and review process. We do <strong>not</strong> perform any trade
                work ourselves. The contract for any work performed is between
                the homeowner and the tradesperson.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                5. Payments
              </h2>
              <p className="text-grey-text leading-relaxed">
                Homeowners pay tradespeople directly for completed work.
                HomeSorted does not handle payments between homeowners and trades.
                Tradespeople on paid plans pay platform subscription fees as
                outlined on our{" "}
                <a href="/pricing" className="text-primary hover:underline">
                  pricing page
                </a>
                .
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                6. Liability
              </h2>
              <p className="text-grey-text leading-relaxed">
                HomeSorted facilitates connections between homeowners and trades.
                We are not responsible for the quality, safety, or legality of
                work performed by tradespeople. While we verify trade credentials
                and maintain a review system, disputes regarding workmanship
                follow our snag resolution process. HomeSorted&apos;s liability
                is limited to the amount of fees paid to us in the 12 months
                preceding a claim.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                7. Disputes
              </h2>
              <p className="text-grey-text leading-relaxed mb-3">
                We provide a structured dispute resolution process:
              </p>
              <ul className="list-disc list-inside text-grey-text space-y-2 leading-relaxed">
                <li>
                  <strong>Minor issues (snags):</strong> Resolved through our
                  snag flow — report the issue via Emma, and the trade is
                  notified and given a timeframe to rectify
                </li>
                <li>
                  <strong>Major issues:</strong> Escalated to our team for review
                  within 48 hours. We will mediate between parties and work
                  towards a fair resolution
                </li>
              </ul>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-grey-text leading-relaxed">
                All HomeSorted branding, AI personas (including Emma and Casey),
                platform design, and content are owned by HomeSorted. You may not
                reproduce, modify, or distribute our intellectual property
                without prior written consent.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                9. Termination
              </h2>
              <p className="text-grey-text leading-relaxed">
                Either party may terminate their use of HomeSorted at any time
                with reasonable notice. Any active jobs at the time of
                termination will continue to completion. We reserve the right to
                suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                10. Changes to These Terms
              </h2>
              <p className="text-grey-text leading-relaxed">
                We may update these Terms from time to time. When we make
                material changes, we will notify users via WhatsApp or email. Your
                continued use of HomeSorted after changes are posted constitutes
                acceptance of the updated Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
