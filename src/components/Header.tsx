
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-brand-slate-900/95 backdrop-blur-md border-b border-brand-slate-200 dark:border-brand-slate-700 shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/eafac406-5a59-4aba-bfec-30b38401b8e7.png" 
                alt="Balaji Group Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-heading font-bold text-brand-navy dark:text-white tracking-tight">
                BALAJI GROUP
              </h1>
              <p className="text-xs text-brand-red font-medium tracking-wide">
                A Complete House of Packaging
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-red dark:hover:text-brand-red transition-colors font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-red dark:hover:text-brand-red transition-colors font-medium py-2 text-sm"
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
