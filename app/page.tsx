import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
   <div className="w-full mx-auto max-w-[1024px]">
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <FAQ />
    <Reviews />
    <Download/>
    <Footer/>
   </div>
  );
}
