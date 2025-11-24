import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Bell, Check, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

const Notifications = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    fetchNotifications();

    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          fetchNotifications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, navigate]);

  const fetchNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNotifications(data || []);
    } catch (error) {
      toast.error("Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;
      toast.success("Marked as read");
    } catch (error) {
      toast.error("Failed to update notification");
    }
  };

  const deleteNotification = async (id: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success("Notification deleted");
    } catch (error) {
      toast.error("Failed to delete notification");
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background pt-32 px-6">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">Loading notifications...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-32 px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="h-8 w-8 text-gold" />
            <h1 className="text-4xl font-bold">Notifications</h1>
          </div>

          {notifications.length === 0 ? (
            <div className="text-center py-20">
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No notifications yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 transition-all hover:border-gold/30 ${
                    notification.read ? 'border-border/30' : 'border-gold/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {notification.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {notification.message}
                      </p>
                      <p className="text-sm text-muted-foreground/60">
                        {new Date(notification.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => markAsRead(notification.id)}
                          className="hover:bg-gold/10 hover:text-gold"
                        >
                          <Check className="h-5 w-5" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteNotification(notification.id)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications;
