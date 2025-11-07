import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCarImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-graphite/50 border border-gold/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-gold">2024 Collection</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Drive Into
            <span className="block bg-gradient-to-r from-gold via-gold-muted to-gold bg-clip-text text-transparent">The Future</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Experience unparalleled luxury and performance with our exclusive collection of premium vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#collection">
              <Button size="lg" className="group shadow-[0_0_30px_rgba(45,90,55,0.3)] hover:shadow-[0_0_40px_rgba(45,90,55,0.5)]">
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link to="/schedule-test-drive">
              <Button size="lg" variant="outline" className="border-gold/30 hover:bg-gold/10 hover:border-gold">
                Schedule Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
