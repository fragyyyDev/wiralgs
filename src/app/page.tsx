import Hero from "@/components/Hero";
import People from "@/components/People";
import WhoWeHelped from "@/components/WhoWeHelped";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('/pattern.png')] opacity-[0.1] pointer-events-none"
        aria-hidden="true" />
      <Hero />
      <WhoWeHelped />
      <People />  
    </div>
  );
}
