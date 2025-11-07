import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gold via-foreground to-gold bg-clip-text text-transparent">Velocity wheels</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <a href="#collection" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Collection
              </a>
            ) : (
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
            )}
            <Link to="/schedule-test-drive">
              <Button variant="default" size="sm">
                Schedule Test Drive
              </Button>
            </Link>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
