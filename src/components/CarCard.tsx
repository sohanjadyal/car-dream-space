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
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,166,234,0.15)]">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border">
          <span className="text-xs font-medium">{category}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">{specs}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
          
          <Button 
            size="sm" 
            className="group/btn"
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
