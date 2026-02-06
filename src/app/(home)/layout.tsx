import Footer from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
