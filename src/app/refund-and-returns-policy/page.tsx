import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Returns Policy | Pulse Laser Clinic",
  description:
    "Refund and returns policy for Pulse Laser Aesthetic Clinic services and products.",
};

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-serif">
        Refund and Returns Policy
      </h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Treatment Refunds
          </h2>
          <p>
            Please note that we do not offer refunds on treatments once they
            have been carried out. However, if you are unsatisfied with your
            treatment, please contact us immediately so we can discuss your
            concerns and rectify the situation where possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Pre-paid Courses
          </h2>
          <p>
            Courses of treatments are non-refundable and non-transferable. If
            you are unable to complete your course due to medical reasons, we
            may, at our discretion, offer a credit note for the remaining value,
            valid for 12 months, upon provision of a doctor's note.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Product Returns
          </h2>
          <p>
            We are happy to refund or exchange any unopened and unused retail
            products within 14 days of purchase, provided you have proof of
            purchase. We cannot accept returns of opened products for hygiene
            reasons unless the product is faulty.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Deposits
          </h2>
          <p>
            Deposits paid for consultations or treatments are fully refundable
            if you cancel or reschedule at least 48 hours before your
            appointment time. Late cancellations or no-shows will result in the
            forfeiture of the deposit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Contact Us
          </h2>
          <p>
            If you have any questions regarding refunds or returns, please speak
            to our clinic manager or contact us at info@pulse-clinic.co.uk.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          Last updated: February 2026
        </p>
      </div>
    </div>
  );
}
