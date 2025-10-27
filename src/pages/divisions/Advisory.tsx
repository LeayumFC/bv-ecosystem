import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Target, Workflow, Zap } from "lucide-react";

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="B&V Advisory"
        description="B&V Advisory: Consultoría estratégica de alto nivel. Entrada a mercados, integración empresarial, optimización de operaciones. Transformamos insights en estrategias rentables."
        keywords="consultoría estratégica, asesoría empresarial, entrada a mercados, fusiones y adquisiciones, optimización operacional, estrategia de negocios, análisis de mercado"
      />
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-center text-foreground mb-6 fade-in">
              B&V <span className="text-primary">Advisory</span>
            </h1>
            <p className="text-xl text-center text-primary font-medium mb-4 fade-in-delay">
              El Brazo Estratégico (El Arquitecto)
            </p>
            <p className="text-lg text-center text-muted-foreground fade-in-delay-2">
              Asesorar a empresas sobre cómo expandirse y optimizarse. Vendemos inteligencia y estrategia.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Consultoría de alto nivel para empresas que buscan crecer, expandirse o transformarse.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Consultoría de Entrada a Mercados
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Ayudamos a marcas (extranjeras o locales) a entrar en nuevos territorios con estrategias probadas.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Análisis de mercado y competencia
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Estrategia de posicionamiento
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identificación de socios locales
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Plan de lanzamiento y go-to-market
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Consultoría de Integración
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Diseñamos planes para crear, comprar o fusionarse con proveedores (vertical) o competidores (horizontal).
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Integración vertical (proveedores/clientes)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Integración horizontal (competidores)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Due diligence y valoración
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Planes de integración post-M&A
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Optimización de Operaciones
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Análisis y reingeniería de procesos para maximizar eficiencia y rentabilidad.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Auditoría de procesos actuales
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identificación de ineficiencias
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Rediseño de operaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Implementación y seguimiento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Nuestro Enfoque Consultivo
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Diagnóstico Profundo</h3>
                  <p className="text-sm text-muted-foreground">
                    Análisis exhaustivo de su situación actual, mercado, y oportunidades disponibles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Estrategia Personalizada</h3>
                  <p className="text-sm text-muted-foreground">
                    Desarrollo de planes de acción específicos basados en datos y experiencia de mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hoja de Ruta Clara</h3>
                  <p className="text-sm text-muted-foreground">
                    Entregamos planes de implementación detallados con hitos medibles y KPIs claros.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Soporte Continuo</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompañamiento durante la ejecución para asegurar resultados exitosos.
                  </p>
                </div>
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
                <strong className="text-primary">Multisectorial / Agnóstico</strong>
              </p>
              <p className="text-muted-foreground text-center">
                Nuestro cliente puede ser un banco, un supermercado, una minera, o una marca que 
                B&V Commerce representa. Nuestra experiencia en detectar oportunidades y diseñar 
                estrategias trasciende industrias específicas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Transforme su Negocio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Permítanos ayudarle a identificar y capturar las oportunidades que harán crecer su empresa.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                Agende una Consulta
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Advisory;
