
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Group', href: '#group' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-balaji-navy/95 backdrop-blur-sm border-b border-balaji-gray-200 dark:border-balaji-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-balaji-red rounded-sm flex items-center justify-center">
              <div className="w-6 h-6 bg-balaji-blue rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white">BALAJI GROUP</h1>
              <p className="text-xs text-balaji-red font-medium">A Complete House of Packaging</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-balaji-navy dark:text-balaji-off-white hover:text-balaji-red transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-balaji-gray-300 dark:border-balaji-gray-600 hover:bg-balaji-red hover:text-white hover:border-balaji-red"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden border-balaji-gray-300 dark:border-balaji-gray-600 hover:bg-balaji-red hover:text-white hover:border-balaji-red"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-balaji-gray-200 dark:border-balaji-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-balaji-navy dark:text-balaji-off-white hover:text-balaji-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
