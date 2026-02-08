import About from "./_components/about";
import BookConsultation from "./_components/book-consultation";
import Banner from "./_components/banner";
import OurPrices from "./_components/our-prices";
import SkinConditions from "./_components/skin-conditions";
import Treatments from "./_components/treatments";
import { Header } from '@/components/shared/header';
import ShopNow from './_components/shop-now';
import AsSeenIn from './_components/as-seen-in';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Treatments />
      <BookConsultation />
      <SkinConditions />
      <OurPrices />
      <ShopNow />
      <AsSeenIn />
    </main>
  );
}
