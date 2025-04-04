
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, ShoppingBag, Phone, Users, Home } from 'lucide-react';

const MainNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-2 sm:py-0 sm:static sm:shadow-none z-10">
      <div className="container mx-auto">
        <ul className="flex justify-around items-center sm:justify-start sm:gap-2">
          <NavItem to="/" icon={<Home size={20} />} label="Home" />
          <NavItem to="/tracker" icon={<Calendar size={20} />} label="Cycle" />
          <NavItem to="/marketplace" icon={<ShoppingBag size={20} />} label="Shop" />
          <NavItem to="/consultations" icon={<Phone size={20} />} label="Consult" />
          <NavItem to="/community" icon={<Users size={20} />} label="Community" />
        </ul>
      </div>
    </nav>
  );
};

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `nav-item ${isActive ? 'active' : ''} sm:flex-row flex-col`
        }
      >
        <span className="sm:mr-1">{icon}</span>
        <span className="text-xs sm:text-sm">{label}</span>
      </NavLink>
    </li>
  );
};

export default MainNav;
