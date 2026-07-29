import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 z-50">
          <div className="bg-primary text-white p-1.5 rounded-lg">
            <Zap size={20} fill="currentColor" />
          </div>
          <span
            className={`font-heading font-bold text-xl tracking-tight ${
              isScrolled ? "text-foreground" : location === "/" ? "text-white" : "text-foreground"
            }`}
          >
            ScaleUp Wealth Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : location === "/" ? "text-white/90" : "text-foreground"
            }`}
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent outline-none ${
                isScrolled ? "text-foreground" : location === "/" ? "text-white/90" : "text-foreground"
              }`}
            >
              Learn <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white border-border/50 shadow-lg rounded-xl">
              <Link href="/digital-marketing">
                <DropdownMenuItem className="cursor-pointer font-medium py-2">
                  Digital Marketing
                </DropdownMenuItem>
              </Link>
              <Link href="/ai-skills">
                <DropdownMenuItem className="cursor-pointer font-medium py-2">
                  AI & Skills
                </DropdownMenuItem>
              </Link>
              <Link href="/online-income">
                <DropdownMenuItem className="cursor-pointer font-medium py-2">
                  Online Income
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : location === "/" ? "text-white/90" : "text-foreground"
            }`}
          >
            About
          </Link>
          
          <Link
            href="/resources"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : location === "/" ? "text-white/90" : "text-foreground"
            }`}
          >
            Resources
          </Link>
          
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-accent ${
              isScrolled ? "text-foreground" : location === "/" ? "text-white/90" : "text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/digital-marketing">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6">
              Start Learning
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 z-50 ${
            isScrolled || mobileMenuOpen ? "text-foreground" : location === "/" ? "text-white" : "text-foreground"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 text-lg font-heading">
            <Link
              href="/"
              onClick={closeMenu}
              className="py-2 border-b border-border/50 text-foreground font-semibold"
            >
              Home
            </Link>
            <div className="py-2 border-b border-border/50">
              <div className="text-foreground font-semibold mb-3 text-sm uppercase text-muted-foreground tracking-wider">
                Learn
              </div>
              <div className="flex flex-col gap-3 pl-4">
                <Link
                  href="/digital-marketing"
                  onClick={closeMenu}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/ai-skills"
                  onClick={closeMenu}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  AI & Skills
                </Link>
                <Link
                  href="/online-income"
                  onClick={closeMenu}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  Online Income
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              onClick={closeMenu}
              className="py-2 border-b border-border/50 text-foreground font-semibold"
            >
              About
            </Link>
            <Link
              href="/resources"
              onClick={closeMenu}
              className="py-2 border-b border-border/50 text-foreground font-semibold"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-2 border-b border-border/50 text-foreground font-semibold"
            >
              Contact
            </Link>
          </div>
          
          <div className="mt-8">
            <Link href="/digital-marketing" onClick={closeMenu}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-full h-12 text-lg">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
