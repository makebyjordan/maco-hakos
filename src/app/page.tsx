import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { AboutUs } from "@/components/landing/about-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <AboutUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
