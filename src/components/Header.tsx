
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Group', href: '/our-group' },
    { name: 'Products', href: '/products' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-off-white/95 dark:bg-brand-navy/95 backdrop-blur-md border-b border-brand-slate-200 dark:border-brand-slate-700 shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/ba221d04-027b-4395-8649-77287da49d97.png" 
                alt="Balaji Group Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-heading font-bold text-brand-navy dark:text-brand-off-white tracking-tight">
                BALAJI GROUP
              </h1>
              <p className="text-sm text-brand-red font-medium tracking-wide">
                A Complete House of Packaging
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-red dark:hover:text-brand-red transition-colors font-medium text-sm tracking-wide ${
                  isActive(item.href) ? 'text-brand-red border-b-2 border-brand-red' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="border-brand-slate-300 dark:border-brand-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden border-brand-slate-300 dark:border-brand-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-brand-slate-200 dark:border-brand-slate-700 pt-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-red dark:hover:text-brand-red transition-colors font-medium py-2 text-sm ${
                    isActive(item.href) ? 'text-brand-red font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
