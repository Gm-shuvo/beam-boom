import About from "./_components/about";
import AsSeenIn from "./_components/as-seen-as";
import Banner from "./_components/banner";
import Consultation from "./_components/consultation";
import OurPrices from "./_components/our-prices";
import Procedure from "./_components/procedure";
import RemovalSlider from "./_components/removal-slider";

export default function LaserTattooRemovalPage() {
  return (
    <main>
      <Banner />
      <About />
      <Procedure />
      <RemovalSlider />
      <Consultation />
      <OurPrices />
      <AsSeenIn />
    </main>
  );
}
