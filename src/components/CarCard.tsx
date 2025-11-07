import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CarCardProps {
  name: string;
  category: string;
  price: string;
  specs: string;
  image: string;
}

const CarCard = ({ name, category, price, specs, image }: CarCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-gold/40 transition-all duration-700 hover:shadow-[0_0_30px_rgba(45,90,55,0.2)]">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-graphite/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-graphite/80 backdrop-blur-sm border border-gold/20">
          <span className="text-xs font-medium text-gold">{category}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 bg-gradient-to-b from-card to-card/95">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors duration-500">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">{specs}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-gold">{price}</p>
          </div>
          
          <Button 
            size="sm" 
            className="group/btn shadow-[0_0_20px_rgba(45,90,55,0.2)] hover:shadow-[0_0_30px_rgba(45,90,55,0.4)]"
          >
            Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
