import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import People from "@/components/People";
import WeAreProudOf from "@/components/WeAreProudOf";
import WhoWeHelped from "@/components/WhoWeHelped";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/pattern.png')] opacity-10"
        aria-hidden="true"
      />

      <Navbar />
      <Hero />
      <WhoWeHelped />
      <People />
      <About />
      <WeAreProudOf />
    </main>
  );
}