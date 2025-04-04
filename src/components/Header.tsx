
import React from 'react';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="py-4 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-empowerpink to-empowerpurple flex items-center justify-center">
            <span className="text-white font-bold">EC</span>
          </div>
          <h1 className="text-xl font-display font-bold">EmpowerCycle</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-empowerpink"></span>
          </Button>
          
          <Avatar>
            <AvatarFallback className="bg-empowerpurple-light text-empowerpurple-dark">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
