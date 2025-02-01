import React from 'react';
import { 
  Home, 
  Newspaper, 
  Search, 
  Bell, 
  User 
} from 'lucide-react';

const BottomHeader = () => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Newspaper, label: 'News' },
    { icon: Search, label: 'Search' },
    { icon: Bell, label: 'Alerts' },
    { icon: User, label: 'Profile' }
  ];

  return (
    <header className="fixed bottom-0 left-0 w-full bg-white shadow-2xl z-50">
      <nav className="grid grid-cols-5 py-3">
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 cursor-pointer"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default BottomHeader;