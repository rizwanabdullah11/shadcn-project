import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Check, 
  Filter, 
  Settings, 
  AlertCircle,
  CheckCircle,
  User,
  MessageSquare,
  Star,
  Archive,
  Trash2,
  MoreVertical,
  Calendar,
  Activity
} from "lucide-react";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Project Completed",
      message: "E-commerce Dashboard project has been successfully completed and deployed to production.",
      time: "2 minutes ago",
      isRead: false,
      icon: CheckCircle,
      user: "Sarah Wilson",
      avatar: "https://avatars.githubusercontent.com/u/345678"
    },
    {
      id: 2,
      type: "warning",
      title: "System Maintenance",
      message: "Scheduled maintenance will begin in 30 minutes. Some services may be temporarily unavailable.",
      time: "15 minutes ago",
      isRead: false,
      icon: AlertCircle,
      user: "System",
      avatar: null
    },
    {
      id: 3,
      type: "info",
      title: "New Team Member",
      message: "Emma Davis has joined the Analytics Platform project team.",
      time: "1 hour ago",
      isRead: true,
      icon: User,
      user: "HR Team",
      avatar: "https://avatars.githubusercontent.com/u/456789"
    },
    {
      id: 4,
      type: "error",
      title: "API Error Detected",
      message: "High error rate detected in the payment processing API. Investigation in progress.",
      time: "2 hours ago",
      isRead: false,
      icon: AlertCircle,
      user: "Monitoring System",
      avatar: null
    },
    {
      id: 5,
      type: "success",
      title: "Payment Received",
      message: "Payment of $2,500 has been received for the Mobile App Redesign project.",
      time: "3 hours ago",
      isRead: true,
      icon: CheckCircle,
      user: "Finance Team",
      avatar: "https://avatars.githubusercontent.com/u/567890"
    },
    {
      id: 6,
      type: "info",
      title: "Meeting Reminder",
      message: "Team standup meeting starts in 10 minutes. Please join the video call.",
      time: "4 hours ago",
      isRead: true,
      icon: Calendar,
      user: "Calendar",
      avatar: null
    },
    {
      id: 7,
      type: "warning",
      title: "Storage Warning",
      message: "Database storage is at 85% capacity. Consider cleanup or expansion.",
      time: "6 hours ago",
      isRead: false,
      icon: AlertCircle,
      user: "System Admin",
      avatar: "https://avatars.githubusercontent.com/u/678901"
    },
    {
      id: 8,
      type: "success",
      title: "Code Review Approved",
      message: "Your pull request for the authentication feature has been approved and merged.",
      time: "1 day ago",
      isRead: true,
      icon: CheckCircle,
      user: "Mike Johnson",
      avatar: "https://avatars.githubusercontent.com/u/789012"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success": return "bg-green-100 text-green-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
      case "info": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };



  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with important alerts and system notifications.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <Button className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">All</Button>
              <Button variant="outline">Unread</Button>
              <Button variant="outline">Important</Button>
              <Button variant="outline">System</Button>
            </div>
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" size="sm">
                <Archive className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
                         <Card key={notification.id} className={`transition-all duration-200 hover:shadow-md ${
               !notification.isRead ? 'border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20' : ''
             } ${notification.id === 1 ? 'ring-2 ring-primary/20' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-medium ${!notification.isRead ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        )}
                        <Badge className={`text-xs ${getTypeColor(notification.type)}`}>
                          {notification.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {notification.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {notification.avatar ? (
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={notification.avatar} />
                            <AvatarFallback className="text-xs">
                              {notification.user.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                            <Bell className="h-3 w-3" />
                          </div>
                        )}
                        <span className="text-xs text-muted-foreground">{notification.user}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {!notification.isRead && (
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Check className="h-3 w-3" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <Archive className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              -3 from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Important</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              High priority alerts
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              System notifications
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Customize how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Project Updates</p>
                <p className="text-sm text-muted-foreground">Notifications about project changes</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">System Alerts</p>
                <p className="text-sm text-muted-foreground">Important system notifications</p>
              </div>
              <Button variant="outline" size="sm">Enabled</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage; 