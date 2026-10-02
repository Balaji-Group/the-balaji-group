import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { withBase } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Companies', href: '/our-group' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-brand" aria-label="The Balaji Group home">
          <img className="brand-mark" src={withBase('/brand-mark.svg')} alt="" />
          <span className="site-brand-copy">
            <span className="site-brand-name">The Balaji Group</span>
            <span className="site-brand-caption">Packaging since 2002</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`site-nav-link${isActive(item.href) ? ' is-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link className="header-quote" to="/contact">
          Request a quote <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mobile-menu-trigger" aria-label="Open navigation">
              <Menu size={20} aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="mobile-nav-sheet">
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <SheetDescription className="sr-only">Choose a page from The Balaji Group website.</SheetDescription>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`mobile-nav-link${isActive(item.href) ? ' is-active' : ''}`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link className="header-quote mobile-quote" to="/contact" onClick={() => setIsSheetOpen(false)}>
              Request a quote <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
