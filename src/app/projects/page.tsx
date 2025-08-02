import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Plus, 
  Filter,
  Calendar,
  Star,
  MoreVertical,
  Eye,
  Edit,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  AlertCircle,
  Pause,
  Play
} from "lucide-react";
import Link from "next/link";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Dashboard",
      code: "PROJ-001",
      description: "A comprehensive e-commerce analytics dashboard with real-time data visualization and reporting features.",
      status: "In Progress",
      progress: 75,
      priority: "High",
      startDate: "2024-01-15",
      endDate: "2024-03-30",
      budget: "$25,000",
      team: [
        { name: "Sarah Wilson", avatar: "https://avatars.githubusercontent.com/u/345678" },
        { name: "Mike Johnson", avatar: "https://avatars.githubusercontent.com/u/789012" },
        { name: "Lisa Wang", avatar: "https://avatars.githubusercontent.com/u/234567" },
      ],
      tasks: 24,
      completed: 18,
      stars: 12,
      branches: 8,
      comments: 45
    },
    {
      id: 2,
      name: "Mobile App Redesign",
      code: "PROJ-002",
      description: "Complete redesign of the mobile application with improved UX and modern design patterns.",
      status: "Planning",
      progress: 15,
      priority: "Medium",
      startDate: "2024-02-01",
      endDate: "2024-04-15",
      budget: "$15,000",
      team: [
        { name: "David Kim", avatar: "https://avatars.githubusercontent.com/u/890123" },
        { name: "Emma Davis", avatar: "https://avatars.githubusercontent.com/u/456789" },
      ],
      tasks: 18,
      completed: 3,
      stars: 8,
      branches: 4,
      comments: 23
    },
    {
      id: 3,
      name: "API Integration Platform",
      code: "PROJ-003",
      description: "Building a robust API integration platform for third-party service connections.",
      status: "Completed",
      progress: 100,
      priority: "Critical",
      startDate: "2023-11-01",
      endDate: "2024-01-31",
      budget: "$35,000",
      team: [
        { name: "Sarah Wilson", avatar: "https://avatars.githubusercontent.com/u/345678" },
        { name: "Mike Johnson", avatar: "https://avatars.githubusercontent.com/u/789012" },
        { name: "David Kim", avatar: "https://avatars.githubusercontent.com/u/890123" },
        { name: "Emma Davis", avatar: "https://avatars.githubusercontent.com/u/456789" },
      ],
      tasks: 32,
      completed: 32,
      stars: 25,
      branches: 12,
      comments: 89
    },
    {
      id: 4,
      name: "Analytics Platform",
      code: "PROJ-004",
      description: "Advanced analytics platform with machine learning capabilities and predictive insights.",
      status: "On Hold",
      progress: 45,
      priority: "High",
      startDate: "2024-01-01",
      endDate: "2024-05-30",
      budget: "$50,000",
      team: [
        { name: "Lisa Wang", avatar: "https://avatars.githubusercontent.com/u/234567" },
        { name: "David Kim", avatar: "https://avatars.githubusercontent.com/u/890123" },
      ],
      tasks: 28,
      completed: 12,
      stars: 15,
      branches: 6,
      comments: 67
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      case "On Hold": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "bg-red-100 text-red-800";
      case "High": return "bg-orange-100 text-orange-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return CheckCircle;
      case "In Progress": return Play;
      case "Planning": return Clock;
      case "On Hold": return Pause;
      default: return AlertCircle;
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage and track all your projects in one place.
          </p>
        </div>
        <Link href="/projects/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create New Project
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">All Projects</Button>
              <Button variant="outline">Active</Button>
              <Button variant="outline">Completed</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => {
          const StatusIcon = getStatusIcon(project.status);
          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <Badge variant="outline" className="text-xs">{project.code}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.startDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{project.budget}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Status and Priority */}
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(project.status)}>
                    <StatusIcon className="h-3 w-3 mr-1" />
                    {project.status}
                  </Badge>
                  <Badge className={getPriorityColor(project.priority)}>
                    {project.priority}
                  </Badge>
                </div>

                {/* Team Members */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, index) => (
                        <Avatar key={index} className="h-6 w-6 border-2 border-background">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="text-xs">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {project.team.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs">
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{project.team.length} members</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      <span>{project.completed}/{project.tasks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">
              Active projects
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter(p => p.status === "In Progress").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Currently active
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter(p => p.status === "Completed").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Successfully delivered
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125K</div>
            <p className="text-xs text-muted-foreground">
              Across all projects
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage; 