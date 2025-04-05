import React from 'react';
import { Bell, LogOut, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import logo from '../assests/zenher-logo.png'; // Adjust the path if needed

const Header = () => {
  return (
    <header className="py-3 border-b border-border bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo + Brand Name */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img src={logo} alt="ZenHer Logo" className="h-8 w-auto object-contain" />
          <h1 className="text-xl font-semibold text-black tracking-tight font-display">
            Zenher
          </h1>
        </div>

        {/* Notification and Avatar */}
        <div className="flex items-center gap-3">
          {/* Tooltip + Bell */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-empowerpink/10 transition">
                  <Bell size={20} className="text-muted-foreground" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-empowerpink animate-ping" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-empowerpink" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Avatar with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer hover:ring-2 ring-empowerpink transition">
                <AvatarImage src="/user.jpg" alt="User" />
                <AvatarFallback className="bg-black text-white">SM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mt-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 hover:bg-red-100">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
