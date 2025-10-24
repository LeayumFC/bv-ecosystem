import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDorado from "@/assets/logo-dorado.png";
import logoNegro from "@/assets/logo-negro.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "El Grupo", path: "/el-grupo" },
    { name: "Nuestra Sinergia", path: "/sinergia" },
    { name: "Contacto", path: "/contacto" },
  ];

  const divisionLinks = [
    { name: "B&V Commerce", path: "/divisiones/commerce" },
    { name: "B&V Logistics", path: "/divisiones/logistics" },
    { name: "B&V Advisory", path: "/divisiones/advisory" },
    { name: "B&V Investments", path: "/divisiones/investments" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoDorado} 
              alt="Biagi & Varnoux Group" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDivisionsOpen(true)}
              onMouseLeave={() => setIsDivisionsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Nuestras Divisiones</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isDivisionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg py-2">
                  {divisionLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                        isActive(link.path) ? "text-primary font-medium" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="space-y-2">
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground"
              >
                <span>Nuestras Divisiones</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isDivisionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDivisionsOpen && (
                <div className="pl-4 space-y-2">
                  {divisionLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-sm ${
                        isActive(link.path) ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
