import { Award, Shield, Users, Zap } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const teamMembers = [
  {
    name: "Michael Sterling",
    role: "Founder & CEO",
    image: team1,
    bio: "25+ years in luxury automotive with a passion for excellence",
  },
  {
    name: "Sarah Chen",
    role: "Sales Director",
    image: team2,
    bio: "Expert in matching clients with their dream vehicles",
  },
  {
    name: "Marcus Rodriguez",
    role: "Service Manager",
    image: team3,
    bio: "Certified master technician with 15 years experience",
  },
  {
    name: "Elena Volkov",
    role: "Finance Specialist",
    image: team4,
    bio: "Tailored financing solutions for every budget",
  },
];

const awards = [
  { year: "2024", title: "Luxury Dealer of the Year" },
  { year: "2023", title: "Customer Excellence Award" },
  { year: "2023", title: "Best Showroom Design" },
  { year: "2022", title: "Top Sales Performance" },
];

const values = [
  {
    icon: Shield,
    title: "Trusted Excellence",
    description: "Every vehicle undergoes rigorous inspection and certification",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated advisors guide you through every step of your journey",
  },
  {
    icon: Zap,
    title: "Premium Selection",
    description: "Curated collection of the world's finest luxury vehicles",
  },
  {
    icon: Award,
    title: "Lifetime Support",
    description: "Comprehensive after-sales care and maintenance programs",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Founded in 1998, LUXAUTO began with a simple vision: to redefine the luxury car buying experience. 
            What started as a boutique showroom has grown into one of the most prestigious automotive destinations, 
            trusted by discerning clients worldwide.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, we represent the pinnacle of automotive excellence, offering not just vehicles, 
            but a gateway to unparalleled luxury, performance, and innovation. Our commitment to perfection 
            in every detail has earned us recognition as industry leaders.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">LUXAUTO</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our passionate team of automotive experts is dedicated to providing you with an exceptional experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">
            Awards & <span className="text-primary">Recognition</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Our commitment to excellence has been recognized by industry leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium">{award.year}</p>
                  <h4 className="text-lg font-bold">{award.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
