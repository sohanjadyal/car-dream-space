import { Button } from "@/components/ui/button";
import { Menu, Bell, LogOut, User, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      checkAdminStatus();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) return;

    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    setIsAdmin(!!data);
  };

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

            {user ? (
              <>
                <Link to="/notifications">
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => {/* Navigate to notifications is handled by Link above */}}>
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/admin" className="flex items-center cursor-pointer">
                            <Shield className="mr-2 h-4 w-4" />
                            Admin Dashboard
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="secondary" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
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
