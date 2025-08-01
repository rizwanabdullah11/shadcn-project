import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUpRight, Clock, TrendingUp } from "lucide-react";

const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
    time: "2 hours ago",
    trend: "+12%"
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
    time: "4 hours ago",
    trend: "+8%"
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
    time: "6 hours ago",
    trend: "+15%"
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
    time: "8 hours ago",
    trend: "+5%"
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
    time: "10 hours ago",
    trend: "+22%"
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
    time: "2 min ago",
    status: "completed"
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
    time: "5 min ago",
    status: "pending"
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
    time: "8 min ago",
    status: "completed"
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
    time: "12 min ago",
    status: "completed"
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
    time: "15 min ago",
    status: "failed"
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  
  const isPopularContent = title === "Popular Content";
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          View all
          <ArrowUpRight className="h-3 w-3 ml-1" />
        </Button>
      </div>
      <div className="space-y-3">
        {list.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:border-border hover:bg-muted/50 transition-all duration-200 cursor-pointer"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-lg relative overflow-hidden ring-2 ring-border/50 group-hover:ring-border transition-all duration-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {!isPopularContent && (
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'pending' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-sm truncate">{item.title}</h4>
                {isPopularContent && (
                  <Badge variant="secondary" className="text-xs">
                    {item.trend}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  {item.badge}
                </Badge>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.time}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-1">
              <div className="font-semibold text-sm">
                ${(item.count / 1000).toFixed(1)}K
              </div>
              {isPopularContent && (
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <TrendingUp className="h-3 w-3" />
                  {item.trend}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;