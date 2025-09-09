import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Home, 
  DollarSign, 
  Target, 
  Store, 
  User, 
  Trophy, 
  Newspaper,
  MessageCircle,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function AppSidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const menuItems = [
    { title: 'Dashboard', icon: Home, href: '/dashboard' },
    { title: 'Expenses', icon: DollarSign, href: '/expenses' },
    { title: 'Goals', icon: Target, href: '/goals' },
    { title: 'Lagom Business', icon: Store, href: '/business' },
    { title: 'Challenges', icon: Trophy, href: '/challenges' },
    { title: 'News', icon: Newspaper, href: '/news' },
    { title: 'AI Chat', icon: MessageCircle, href: '/chat' },
  ];

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="border-b border-border/50 p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl lagom-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <h1 className="text-2xl font-bold tracking-wider">LAGOM</h1>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground mb-4">
            Finance Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.href}
                    className="w-full justify-start gap-3 px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <Link to={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="w-full justify-start gap-3 px-4 py-3">
              <Link to="/profile">
                <User className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">{user?.name}</span>
                  <span className="text-xs text-muted-foreground">{user?.email}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={logout}
              className="w-full justify-start gap-3 px-4 py-3 text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}