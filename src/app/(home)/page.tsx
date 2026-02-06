import About from "./_components/about";
import BookConsultation from "./_components/book-consultation";
import Hero from "./_components/hero";
import OurPrices from "./_components/our-prices";
import SkinConditions from "./_components/skin-conditions";
import Treatments from "./_components/treatments";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BookConsultation />
      <Treatments />
      <SkinConditions />
      <OurPrices />
    </main>
  );
}
