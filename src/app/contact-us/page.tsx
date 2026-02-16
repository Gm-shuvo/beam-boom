import AsSeenIn from "./_components/as-seen-as";
import Banner from "./_components/banner";
import ContactFormSection from "./_components/contact-form";
import ContactInfo from "./_components/contact-info";

export default function ContactUsPage() {
  return (
    <main>
      <Banner />
      <ContactInfo />
      <ContactFormSection />
      <AsSeenIn />
    </main>
  );
}
