import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Solutions from "@/components/Solutions";
import WhyKings from "@/components/WhyKings";
import Partners from "@/components/Partners";
import CEOMessage from "@/components/CEOMessage";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full mx-auto bg-white">
      <Header />
      <Hero />
      <Values />
      <Solutions />
      <WhyKings />
      <Partners />
      <CEOMessage />
      <Facts />
      <Footer />
    </div>
  );
}
