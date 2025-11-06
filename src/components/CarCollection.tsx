import CarCard from "./CarCard";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

const cars = [
  {
    id: 1,
    name: "Apex GT-R",
    category: "Sports",
    price: "$125,000",
    specs: "640 HP • 0-60 in 2.8s • Top Speed 205 mph",
    image: car1,
  },
  {
    id: 2,
    name: "Urban Elite SUV",
    category: "Luxury SUV",
    price: "$89,500",
    specs: "380 HP • AWD • Seating for 7",
    image: car2,
  },
  {
    id: 3,
    name: "Executive Sedan",
    category: "Sedan",
    price: "$78,000",
    specs: "335 HP • Luxury Interior • Advanced Tech",
    image: car3,
  },
  {
    id: 4,
    name: "Volt E-Sport",
    category: "Electric",
    price: "$95,000",
    specs: "520 HP • 400 Mile Range • 0-60 in 3.2s",
    image: car4,
  },
  {
    id: 5,
    name: "Velocity Roadster",
    category: "Convertible",
    price: "$142,000",
    specs: "510 HP • Lightweight Design • Pure Thrill",
    image: car5,
  },
  {
    id: 6,
    name: "Prestige V8",
    category: "Performance",
    price: "$105,000",
    specs: "475 HP • V8 Engine • Premium Comfort",
    image: car6,
  },
];

const CarCollection = () => {
  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect blend of power, elegance, and innovation in every vehicle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={car.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCollection;
