import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { withBase } from '@/lib/utils';

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Group", href: "/our-group" },
  { name: "Products", href: "/products" },
  
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fade-in fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect border-b border-border shadow-lg' : 'bg-transparent'
      }`}
      style={{backdropFilter: isScrolled ? 'blur(16px) saturate(1.2)' : undefined}}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="relative">
            <img 
              src={withBase('/lovable-uploads/ba221d04-027b-4395-8649-77287da49d97.png')} 
              alt="Balaji Group Logo" 
              className="h-12 w-auto filter brightness-125 drop-shadow-lg transition-transform group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-heading font-bold text-off-white tracking-tight drop-shadow-sm">
              BALAJI GROUP
            </h1>
            <p className="text-accent font-medium tracking-wide text-xs uppercase">
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
              className={`relative text-off-white hover:text-primary transition-colors font-medium text-base tracking-wide px-2 py-1 ${isActive(item.href) ? 'text-primary' : ''}`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          {/* Mobile Navigation Toggle */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-off-white hover:bg-card/60">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card/90 glass-effect border-l border-border w-[260px] sm:w-[320px] p-0">
              <div className="flex flex-col items-start space-y-8 pt-12 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-off-white hover:text-primary transition-colors font-semibold text-xl ${isActive(item.href) ? 'text-primary' : ''}`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="w-full btn-primary mt-4">
                  <Link to="/contact" onClick={() => setIsSheetOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
