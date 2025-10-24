import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DivisionCard from "@/components/DivisionCard";
import Footer from "@/components/Footer";
import { ShoppingBag, Truck, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const divisions = [
    {
      title: "B&V Commerce",
      subtitle: "El Brazo Comercial",
      description: "Distribución y representación de marcas internacionales. Su socio estratégico en comercio internacional.",
      icon: ShoppingBag,
      link: "/divisiones/commerce"
    },
    {
      title: "B&V Logistics",
      subtitle: "El Brazo Operativo",
      description: "Servicios integrales de cadena de suministro. Transporte internacional, gestión aduanera y logística de última milla.",
      icon: Truck,
      link: "/divisiones/logistics"
    },
    {
      title: "B&V Advisory",
      subtitle: "El Brazo Estratégico",
      description: "Consultoría de alto nivel. Asesoramiento para expansión de mercados y optimización de operaciones.",
      icon: Lightbulb,
      link: "/divisiones/advisory"
    },
    {
      title: "B&V Investments",
      subtitle: "El Brazo Constructor",
      description: "Creación y adquisición de empresas. Joint ventures y asociaciones estratégicas para nuevas oportunidades.",
      icon: TrendingUp,
      link: "/divisiones/investments"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Divisions Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Nuestras Divisiones
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Operamos a través de cuatro divisiones especializadas para ofrecer un valor integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <div
                key={division.title}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DivisionCard {...division} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                La Fortaleza del Grupo
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nuestro verdadero poder reside en cómo nuestras divisiones colaboran, transformando la información del mercado en oportunidades de negocio reales.
              </p>
              <p className="text-muted-foreground mb-8">
                Desde la detección de oportunidades hasta la ejecución estratégica, cada división juega un papel crucial en nuestro ecosistema integrado.
              </p>
              <Link to="/sinergia">
                <Button className="bg-primary hover:bg-accent text-primary-foreground group">
                  Descubra Nuestro Modelo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="fade-in-delay">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Detección</h3>
                    <p className="text-sm text-muted-foreground">
                      Commerce y Logistics identifican problemas e ineficiencias del mercado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Análisis</h3>
                    <p className="text-sm text-muted-foreground">
                      Advisory estudia y confirma oportunidades de negocio rentables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ejecución</h3>
                    <p className="text-sm text-muted-foreground">
                      Investments crea o adquiere las empresas necesarias para capturar la oportunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
