import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              B&V Group
            </h3>
            <p className="text-sm text-muted-foreground">
              Integrando Comercio, Logística, Estrategia e Inversión para crear soluciones empresariales integrales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/el-grupo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  El Grupo
                </Link>
              </li>
              <li>
                <Link to="/sinergia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nuestra Sinergia
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Divisiones</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/divisiones/commerce" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  B&V Commerce
                </Link>
              </li>
              <li>
                <Link to="/divisiones/logistics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  B&V Logistics
                </Link>
              </li>
              <li>
                <Link to="/divisiones/advisory" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  B&V Advisory
                </Link>
              </li>
              <li>
                <Link to="/divisiones/investments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  B&V Investments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:info@byvgroup.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@byvgroup.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">+591 XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Biagi & Varnoux Group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
