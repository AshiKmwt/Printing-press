import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Header />
     <Hero />
      <About />
      <Services />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
