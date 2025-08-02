import {
  Home,
  Settings,
  User2,
  ChevronUp,
  Plus,
  Projector,
  ChevronDown,
  BarChart3,
  Users,
  CreditCard,
  FileText,
  MessageSquare,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    badge: null,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    badge: null,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: Users,
    badge: null,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: CreditCard,
    badge: "12",
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
    badge: null,
  },
  {
    title: "Messages",
    url: "/messages",
    icon: MessageSquare,
    badge: "3",
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    badge: null,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-semibold text-lg">Nomi Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarSeparator />
        
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/#" className="flex items-center gap-3">
                    <Projector className="h-4 w-4" />
                    <span>All Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
                             <SidebarMenuItem>
                 <SidebarMenuButton asChild>
                   <Link href="/projects/new" className="flex items-center gap-3">
                     <Plus className="h-4 w-4" />
                     <span>New Project</span>
                   </Link>
                 </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* COLLAPSABLE */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span>Tools</span>
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                                     <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/settings" className="flex items-center gap-3">
                         <Settings className="h-4 w-4" />
                         <span>Settings</span>
                       </Link>
                     </SidebarMenuButton>
                   </SidebarMenuItem>
                   <SidebarMenuItem>
                     <SidebarMenuButton asChild>
                       <Link href="/help" className="flex items-center gap-3">
                         <HelpCircle className="h-4 w-4" />
                         <span>Help & Support</span>
                       </Link>
                     </SidebarMenuButton>
                   </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">N</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Nomi Dev</span>
                    <span className="text-xs text-muted-foreground">Admin</span>
                  </div>
                  <ChevronUp className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User2 className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;