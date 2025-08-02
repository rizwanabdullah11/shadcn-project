import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Search,
  BookOpen,
  Video,
  FileText,
  Users,
  Star,
  Clock,
  ChevronDown,
  ExternalLink,
  Upload,
  Settings,
  Shield,
  Monitor,
  Plus,
  Send
} from "lucide-react";

const HelpPage = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: [
        {
          question: "How do I create my first project?",
          answer: "To create your first project, navigate to the Projects page and click the 'Create New Project' button. Fill in the required information including project name, description, and team members."
        },
        {
          question: "How do I invite team members?",
          answer: "You can invite team members by going to your project settings and clicking 'Add Member'. Enter their email address and assign them a role."
        },
        {
          question: "What are the different project types?",
          answer: "We support various project types including Web Applications, Mobile Apps, Desktop Apps, API Development, UI/UX Design, and Consulting projects."
        }
      ]
    },
    {
      title: "Account & Billing",
      icon: Settings,
      items: [
        {
          question: "How do I change my subscription plan?",
          answer: "Go to Settings > Billing to view and modify your current subscription plan. You can upgrade, downgrade, or cancel your subscription at any time."
        },
        {
          question: "How do I update my payment information?",
          answer: "Navigate to Settings > Billing > Payment Methods to add, edit, or remove payment methods associated with your account."
        },
        {
          question: "Can I export my data?",
          answer: "Yes, you can export your data by going to Settings > Data & Privacy > Export Data. This will download a copy of all your project data."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      items: [
        {
          question: "How secure is my data?",
          answer: "We use industry-standard encryption and security practices to protect your data. All data is encrypted in transit and at rest."
        },
        {
          question: "How do I enable two-factor authentication?",
          answer: "Go to Settings > Account Security and click 'Enable 2FA' to set up two-factor authentication for your account."
        },
        {
          question: "What happens if I forget my password?",
          answer: "You can reset your password by clicking 'Forgot Password' on the login page. We&apos;ll send you a secure link to reset your password."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Monitor,
      items: [
        {
          question: "What browsers are supported?",
          answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version."
        },
        {
          question: "How do I report a bug?",
          answer: "You can report bugs by clicking the 'Report Bug' button in the help menu or by contacting our support team directly."
        },
        {
          question: "Is there a mobile app?",
          answer: "Currently, we offer a responsive web application that works great on mobile devices. Native mobile apps are in development."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      response: "Usually responds in 5 minutes",
      badge: "Online",
      color: "bg-green-500"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      response: "Usually responds in 2 hours",
      badge: "24/7",
      color: "bg-blue-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      response: "Available 9AM-6PM EST",
      badge: "Pro Only",
      color: "bg-purple-500"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API docs",
      icon: BookOpen,
      link: "#",
      badge: "Updated"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      link: "#",
      badge: "New"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: Users,
      link: "#",
      badge: "Active"
    },
    {
      title: "API Reference",
      description: "Technical documentation",
      icon: FileText,
      link: "#",
      badge: "v2.1"
    }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Find answers, get help, and connect with our support team.
          </p>
        </div>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Contact Support
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for help articles, tutorials, or contact support..."
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Help */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Quick Help
              </CardTitle>
              <CardDescription>
                Common questions and quick solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex items-start gap-3">
                    <Plus className="h-5 w-5 text-primary mt-1" />
                    <div className="text-left">
                      <h3 className="font-medium">Create a Project</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn how to create your first project
                      </p>
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div className="text-left">
                      <h3 className="font-medium">Invite Team Members</h3>
                      <p className="text-sm text-muted-foreground">
                        Add collaborators to your projects
                      </p>
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex items-start gap-3">
                    <Settings className="h-5 w-5 text-primary mt-1" />
                    <div className="text-left">
                      <h3 className="font-medium">Account Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your profile and preferences
                      </p>
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="h-auto p-4 justify-start">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1" />
                    <div className="text-left">
                      <h3 className="font-medium">Security Setup</h3>
                      <p className="text-sm text-muted-foreground">
                        Enable 2FA and security features
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions organized by category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {faqCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <h4 className="font-medium mb-2">{item.question}</h4>
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Separator />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select className="w-full p-2 border rounded-md bg-background">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Describe your issue or question..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Attach File
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Support Channels */}
          <Card>
            <CardHeader>
              <CardTitle>Get Help</CardTitle>
              <CardDescription>
                Choose how you would like to contact us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.title} className="p-4 border rounded-lg hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${channel.color} text-white`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{channel.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {channel.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {channel.description}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {channel.response}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>
                Helpful documentation and guides
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <div key={resource.title} className="flex items-center justify-between p-3 border rounded-lg hover:border-primary hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-primary" />
                      <div>
                        <h3 className="font-medium text-sm">{resource.title}</h3>
                        <p className="text-xs text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.badge}
                      </Badge>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Support Team */}
          <Card>
            <CardHeader>
              <CardTitle>Support Team</CardTitle>
              <CardDescription>
                Meet our dedicated support specialists
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/123456" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">Sarah Miller</h3>
                    <p className="text-xs text-muted-foreground">Senior Support Specialist</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">4.9/5 rating</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/789012" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">John Davis</h3>
                    <p className="text-xs text-muted-foreground">Technical Support Engineer</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">4.8/5 rating</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/345678" />
                    <AvatarFallback>LW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">Lisa Wang</h3>
                    <p className="text-xs text-muted-foreground">Customer Success Manager</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Support Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.5h</div>
                  <div className="text-xs text-muted-foreground">Avg Response Time</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Online Support</span>
                  <Badge variant="default" className="bg-green-500">
                    Available
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Queue Time</span>
                  <span className="text-muted-foreground">~5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpPage; 