import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  CalendarCheck, 
  ShoppingCart, 
  PhoneCall, 
  Users2, 
  LucideIcon 
} from 'lucide-react';

interface NavItemConfig {
  path: string;
  icon: LucideIcon;
  label: string;
  ariaLabel: string;
  color: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { path: '/', icon: HomeIcon, label: 'Home', ariaLabel: 'Dashboard', color: '#4B5563' },
  { path: '/tracker', icon: CalendarCheck, label: 'Track', ariaLabel: 'Cycle Tracker', color: '#A21CAF' },
  { path: '/marketplace', icon: ShoppingCart, label: 'Shop', ariaLabel: 'Marketplace', color: '#047857' },
  { path: '/consultations', icon: PhoneCall, label: 'Consult', ariaLabel: 'Consultations', color: '#B45309' },
  { path: '/community', icon: Users2, label: 'Connect', ariaLabel: 'Community', color: '#1D4ED8' },
];

const MainNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 z-50 sm:static sm:border-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-between items-center max-w-md mx-auto sm:max-w-3xl">
          {NAV_ITEMS.map((item) => (
            <NavItem 
              key={item.path}
              to={item.path}
              icon={<item.icon size={24} />}
              label={item.label}
              ariaLabel={item.ariaLabel}
              color={item.color}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

interface NavItemProps extends Pick<NavLinkProps, 'to'> {
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  color: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, ariaLabel, color }) => {
  return (
    <li className="flex-shrink-0 w-[60px] sm:w-24">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-full h-[60px] sm:h-20 rounded-lg
          ${isActive ? 'bg-gray-100' : ''}`
        }
        style={({ isActive }) => ({
          color: isActive ? color : '#6B7280',
        })}
        aria-label={ariaLabel}
      >
        <div className="w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs sm:text-sm font-medium mt-1">
          {label}
        </span>
      </NavLink>
    </li>
  );
};

export default MainNav;