import { Badge } from "@/components/ui/badge";


interface NotificationBadgeProps {
  count: number;
  className?: string;
}

const NotificationBadge = ({ count, className = "" }: NotificationBadgeProps) => {
  if (count === 0) return null;

  return (
    <Badge 
      variant="destructive" 
      className={`absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center animate-pulse ${className}`}
    >
      {count > 99 ? "99+" : count}
    </Badge>
  );
};

export default NotificationBadge; 