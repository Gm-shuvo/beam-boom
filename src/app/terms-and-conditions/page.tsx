import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pulse Laser Clinic",
  description:
    "Terms and conditions for Pulse Laser Aesthetic Clinic services and treatments.",
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-serif">
        Terms and Conditions
      </h1>

      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p>
            Welcome to Pulse Laser Aesthetic Clinic. These terms and conditions
            apply to all services, treatments, and products provided by our
            clinic. By booking an appointment or purchasing a product, you agree
            to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Appointments and Cancellations
          </h2>
          <p>
            A deposit may be required to secure your appointment. We understand
            that circumstances may change, but we kindly request at least 48
            hours' notice for any cancellations or rescheduling. Late
            cancellations or missed appointments may result in the forfeiture of
            your deposit or a cancellation fee.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Treatments and Consultations
          </h2>
          <p>
            All treatments require a prior consultation to assess suitability.
            Our practitioners reserve the right to refuse treatment if it is
            deemed unsafe or unsuitable for the client. Outcomes of treatments
            can vary between individuals, and specific results cannot be
            guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Payments and Refunds
          </h2>
          <p>
            Payment is due at the time of treatment. We accept major
            credit/debit cards and cash. Refunds are generally not provided for
            treatments once they have been carried out. Packages and courses of
            treatments are non-refundable and non-transferable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Privacy Policy
          </h2>
          <p>
            We are committed to protecting your privacy. Your personal and
            medical information will be kept confidential and used only for the
            purpose of providing your treatment, in accordance with our Privacy
            Policy and data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            6. Contact Us
          </h2>
          <p>
            If you have any questions about these terms, please contact us at
            info@pulse-clinic.co.uk or call us at 020 3405 8483.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          Last updated: February 2026
        </p>
      </div>
    </div>
  );
}
