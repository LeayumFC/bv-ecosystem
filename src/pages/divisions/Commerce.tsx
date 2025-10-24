import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Globe, TrendingUp, Award } from "lucide-react";

const Commerce = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-center text-foreground mb-6 fade-in">
              B&V <span className="text-primary">Commerce</span>
            </h1>
            <p className="text-xl text-center text-primary font-medium mb-4 fade-in-delay">
              El Brazo Comercial
            </p>
            <p className="text-lg text-center text-muted-foreground fade-in-delay-2">
              Ser el socio comercial (partner) y distribuidor oficial de marcas internacionales.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Nuestros Servicios
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Distribución y Representación
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Gestión integral de marketing, ventas y garantía de marcas internacionales 
                  en el mercado local.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Representación exclusiva de marcas premium
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Estrategias de posicionamiento de marca
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión de garantías y servicio postventa
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Expansión en canales de distribución
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Comercio (Trading)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Importación y exportación de productos por cuenta propia, 
                  optimizando la cadena de valor comercial.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Importación directa de fabricantes
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Exportación a mercados regionales
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión de inventarios estratégicos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Optimización de márgenes comerciales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        

        {/* Focus Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                Nuestro Enfoque
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-6">
                Especializado en <strong className="text-primary">Comercio Internacional</strong>
              </p>
              <p className="text-muted-foreground text-center">
                Conectamos marcas globales con mercados locales, creando valor para ambas partes 
                a través de nuestra experiencia en gestión comercial y conocimiento profundo 
                del mercado boliviano y regional.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              ¿Busca un Socio para Representar su Marca?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Permítanos ser su puerta de entrada al mercado boliviano y regional.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                Contáctenos
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Commerce;
