import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Plus, 
  Mail, 
  Archive, 
  Trash2, 
  Star,
  Reply,
  Forward,
  MoreVertical,
  Filter,
  Inbox,
  Send as SendIcon,
  Clock,
  MessageSquare
} from "lucide-react";

const MessagesPage = () => {
  const messages = [
    {
      id: 1,
      sender: "Sarah Wilson",
      avatar: "https://avatars.githubusercontent.com/u/345678",
      subject: "Project Update - E-commerce Dashboard",
      preview: "Hi John, I wanted to share the latest updates on the e-commerce dashboard project. We&apos;ve made significant progress...",
      time: "2 hours ago",
      isRead: false,
      isStarred: true,
      priority: "high"
    },
    {
      id: 2,
      sender: "Mike Johnson",
      avatar: "https://avatars.githubusercontent.com/u/789012",
      subject: "Team Meeting Tomorrow",
      preview: "Don&apos;t forget about our team meeting tomorrow at 10 AM. We&apos;ll be discussing the Q1 goals and upcoming projects.",
      time: "4 hours ago",
      isRead: true,
      isStarred: false,
      priority: "medium"
    },
    {
      id: 3,
      sender: "Lisa Wang",
      avatar: "https://avatars.githubusercontent.com/u/234567",
      subject: "Design Review Feedback",
      preview: "Great work on the new design! I have some feedback and suggestions for improvement. Let&apos;s schedule a call...",
      time: "1 day ago",
      isRead: true,
      isStarred: true,
      priority: "low"
    },
    {
      id: 4,
      sender: "David Kim",
      avatar: "https://avatars.githubusercontent.com/u/890123",
      subject: "API Integration Complete",
      preview: "The API integration for the analytics platform is now complete. All endpoints are working as expected.",
      time: "2 days ago",
      isRead: true,
      isStarred: false,
      priority: "medium"
    },
    {
      id: 5,
      sender: "Emma Davis",
      avatar: "https://avatars.githubusercontent.com/u/456789",
      subject: "Client Presentation",
      preview: "The client presentation went really well! They loved the new features and are excited to move forward.",
      time: "3 days ago",
      isRead: true,
      isStarred: false,
      priority: "high"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Manage your inbox and communicate with your team.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Compose Message
        </Button>
      </div>

             {/* Search and Filters */}
       <Card>
         <CardContent className="p-4">
           <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">All Messages</Button>
              <Button variant="outline">Unread</Button>
              <Button variant="outline">Starred</Button>
            </div>
          </div>
        </CardContent>
      </Card>

             {/* Messages List */}
       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
         {/* Messages List */}
         <div className="xl:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Inbox className="h-5 w-5" />
                Inbox
              </CardTitle>
              <CardDescription>
                {messages.filter(m => !m.isRead).length} unread messages
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {messages.map((message) => (
                                     <div
                     key={message.id}
                     className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-muted/50 transition-colors ${
                       !message.isRead ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                     } ${message.id === 1 ? 'bg-muted/30 border-l-4 border-l-primary' : ''}`}
                   >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={message.avatar} />
                        <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <p className={`font-medium text-sm ${!message.isRead ? 'font-semibold' : ''}`}>
                              {message.sender}
                            </p>
                            <Badge className={getPriorityColor(message.priority)}>
                              {message.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            {message.isStarred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                        </div>
                        <p className={`text-sm mb-1 ${!message.isRead ? 'font-semibold' : ''}`}>
                          {message.subject}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {message.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

                 {/* Message Detail */}
         <div className="xl:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/345678" />
                    <AvatarFallback>SW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Sarah Wilson</h3>
                    <p className="text-sm text-muted-foreground">Project Update - E-commerce Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Reply className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Forward className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>2 hours ago</span>
                <Badge variant="secondary">High Priority</Badge>
              </div>
              
              <Separator />
              
              <div className="prose prose-sm max-w-none">
                <p>Hi John,</p>
                <p>I wanted to share the latest updates on the e-commerce dashboard project. We&apos;ve made significant progress on the following areas:</p>
                <ul>
                  <li>User authentication system is now fully implemented</li>
                  <li>Product catalog with advanced filtering is complete</li>
                  <li>Payment gateway integration is 90% done</li>
                  <li>Analytics dashboard with real-time data is functional</li>
                </ul>
                <p>The team has been working hard to meet the deadline, and I&apos;m confident we&apos;ll be able to deliver on time. We should schedule a demo for the client next week.</p>
                <p>Let me know if you have any questions or if you&apos;d like to review any specific features.</p>
                <p>Best regards,<br />Sarah</p>
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                <Button className="flex items-center gap-2">
                  <Reply className="h-4 w-4" />
                  Reply
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Forward className="h-4 w-4" />
                  Forward
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Archive className="h-4 w-4" />
                  Archive
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              -5 from yesterday
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Starred</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              Important messages
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sent</CardTitle>
            <SendIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MessagesPage; 