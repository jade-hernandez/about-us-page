import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./icons/HamburgerIcon";
import NavLogo from "./icons/NavLogo";
import Button from "../ui/Button";
import Link from "../ui/Link";
import { navLinks } from "./navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-4 transition-[background-color,backdrop-filter,box-shadow] duration-300 md:px-8 lg:px-0 ${
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className='mx-auto flex w-full max-w-304 items-center justify-between py-3 lg:gap-24'
        role='navigation'
        aria-label='Main navigation'
      >
        <NavLogo />

        {/* Navigation desktop */}
        <div className='hidden items-center gap-8 lg:flex lg:pr-[205px]'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              variant='linkGray'
              size='md-link'
              aria-current={pathname === href ? "page" : undefined}
              className={pathname === href ? "text-neutral-900" : ""}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA buttons desktop */}
        <div className='hidden items-center gap-4 lg:flex'>
          <Button
            variant='secondary'
            size='md'
          >
            Learn more
          </Button>
          <Button
            variant='primary'
            size='md'
          >
            See pricing
          </Button>
        </div>

        {/* Hamburger mobile/tablet */}
        <Button
          variant='linkGray'
          size='icon-md'
          onClick={() => setIsOpen(!isOpen)}
          aria-controls='mobile-menu'
          aria-label='Toggle mobile menu'
          aria-expanded={isOpen}
          className='lg:hidden'
        >
          <HamburgerIcon />
        </Button>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </nav>
    </header>
  );
}
