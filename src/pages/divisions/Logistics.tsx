import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Plane, Package, MapPin } from "lucide-react";

const Logistics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <Truck className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-center text-foreground mb-6 fade-in">
              B&V <span className="text-primary">Logistics</span>
            </h1>
            <p className="text-xl text-center text-primary font-medium mb-4 fade-in-delay">
              El Brazo Operativo
            </p>
            <p className="text-lg text-center text-muted-foreground fade-in-delay-2">
              Proveer servicios integrales de cadena de suministro (Supply Chain).
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Nuestros Servicios
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Transporte Internacional
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Freight Forwarding completo para sus operaciones globales.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Transporte aéreo y marítimo
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Consolidación de carga
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Seguimiento en tiempo real
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Seguros de mercancía
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Gestión Aduanera
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Despacho y cumplimiento normativo sin complicaciones.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Despacho de importación/exportación
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Clasificación arancelaria
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión documental
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Compliance regulatorio
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Almacenamiento y Última Milla
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Logística integral desde el puerto hasta el cliente final.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Almacenaje temporal y estratégico
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Distribución local
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión de inventarios
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Entrega última milla
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Por Qué Elegirnos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Experiencia Probada</h3>
                <p className="text-sm text-muted-foreground">
                  Años de experiencia gestionando operaciones logísticas complejas en 
                  comercio internacional.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Red Global</h3>
                <p className="text-sm text-muted-foreground">
                  Conexiones con agentes en los principales puertos y aeropuertos del mundo.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Tecnología Avanzada</h3>
                <p className="text-sm text-muted-foreground">
                  Plataformas de tracking y gestión para visibilidad completa de sus envíos.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Servicio Personalizado</h3>
                <p className="text-sm text-muted-foreground">
                  Soluciones a medida para las necesidades específicas de su negocio.
                </p>
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
                Aunque podemos dar servicio a cualquier industria, nuestra especialización en 
                comercio internacional nos permite ofrecer soluciones optimizadas para empresas 
                que mueven productos a través de fronteras.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Optimice su Cadena de Suministro
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Permítanos gestionar su logística para que usted pueda enfocarse en su negocio.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                Hable con un Experto
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Logistics;
