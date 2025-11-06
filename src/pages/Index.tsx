import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CarCollection from "@/components/CarCollection";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CarCollection />
      <About />
    </div>
  );
};

export default Index;
