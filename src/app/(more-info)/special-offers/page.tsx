import About from "./_components/about";
import AsSeenIn from "./_components/as-seen-as";
import Banner from "./_components/banner";
import NewsletterSignup from "./_components/news-letter-sign-up";
import Offers from "./_components/offers";

export default function SpecialOfferPage() {
  return (
    <main>
      <Banner />
      <About />
      <Offers />
      <NewsletterSignup />
      <AsSeenIn />
    </main>
  );
}
