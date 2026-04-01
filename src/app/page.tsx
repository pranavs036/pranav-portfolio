import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen grid-bg noise-overlay">
      <div className="mesh-gradient fixed inset-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Footer />
      </div>
    </main>
  );
}
