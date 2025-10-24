import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Rocket, Handshake, Building2 } from "lucide-react";

const Investments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl font-serif font-bold text-center text-foreground mb-6 fade-in">
              B&V <span className="text-primary">Investments</span>
            </h1>
            <p className="text-xl text-center text-primary font-medium mb-4 fade-in-delay">
              El Brazo Constructor (El Socio)
            </p>
            <p className="text-lg text-center text-muted-foreground fade-in-delay-2">
              Crear o adquirir empresas para el propio holding, en solitario o en sociedad (Joint Venture).
            </p>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-4">
              Nuestras Actividades
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transformamos oportunidades detectadas en negocios reales y rentables.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Creación de Empresas (Ventures)
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Lanzamos nuevas compañías desde cero para llenar vacíos de mercado identificados.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identificación de oportunidades
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Plan de negocio y estructuración
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Financiamiento y capitalización
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Lanzamiento y operación inicial
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Adquisición e Integración
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Adquirimos empresas que refuerzan las otras divisiones del grupo.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Identificación de targets estratégicos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Due diligence exhaustivo
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Negociación y cierre
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Integración al ecosistema B&V
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-secondary rounded-lg border-2 border-border gold-border-hover fade-in-delay-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center mb-4">
                  Joint Ventures
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Nos asociamos con marcas o clientes para crear juntos la empresa que necesitan.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Estructuración de la sociedad
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Aporte de capital y recursos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Gestión compartida
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Reparto de beneficios acordado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Process */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Nuestro Proceso de Inversión
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sourcing</h3>
                  <p className="text-sm text-muted-foreground">
                    Recibimos oportunidades de B&V Advisory (insights de mercado) o identificamos 
                    empresas que complementan nuestro ecosistema.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Evaluación</h3>
                  <p className="text-sm text-muted-foreground">
                    Análisis riguroso de viabilidad, mercado, proyecciones financieras y sinergias con el grupo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Estructuración</h3>
                  <p className="text-sm text-muted-foreground">
                    Diseño de la estructura societaria óptima (100% B&V, JV con socio, etc.) y 
                    plan de financiamiento.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ejecución</h3>
                  <p className="text-sm text-muted-foreground">
                    Creación o adquisición de la empresa, instalación de management, y operación inicial.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Crecimiento</h3>
                  <p className="text-sm text-muted-foreground">
                    Escalamiento del negocio aprovechando las sinergias con las otras divisiones del grupo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-6">
              Ejemplos de Inversiones
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Así es como transformamos insights en negocios reales:
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-secondary rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">Ejemplo 1: Creación Propia</h4>
                <p className="text-sm text-muted-foreground">
                  B&V Commerce detecta que el servicio técnico de laptops es deficiente. 
                  B&V Advisory valida la oportunidad ($X millones de mercado). 
                  <strong className="text-primary"> B&V Investments crea una cadena de centros 
                  de servicio técnico autorizado</strong>, que luego es usado por B&V Commerce 
                  para sus clientes.
                </p>
              </div>

              <div className="p-6 bg-secondary rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-foreground mb-2">Ejemplo 2: Adquisición Estratégica</h4>
                <p className="text-sm text-muted-foreground">
                  B&V Logistics necesita capacidad de almacenamiento propia. 
                  <strong className="text-accent"> B&V Investments adquiere una empresa de warehousing</strong>, 
                  que se integra a B&V Logistics y reduce costos operativos del grupo en un 20%.
                </p>
              </div>

              <div className="p-6 bg-secondary rounded-lg border-l-4 border-highlight">
                <h4 className="font-semibold text-foreground mb-2">Ejemplo 3: Joint Venture</h4>
                <p className="text-sm text-muted-foreground">
                  B&V Advisory asesora a una marca (ej. DELL) sobre cómo entrar al sector educativo. 
                  La marca quiere ejecutar pero no tiene recursos locales. 
                  <strong className="text-highlight"> B&V Investments se asocia 50/50 para crear 
                  una distribuidora especializada en instituciones educativas</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
                Nuestro Enfoque
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-6">
                <strong className="text-primary">Multisectorial / Agnóstico</strong>
              </p>
              <p className="text-muted-foreground text-center">
                No nos limitamos a una industria. Creamos o adquirimos negocios en cualquier sector 
                donde detectemos una oportunidad sólida y rentable. Nuestra ventaja es la sinergia 
                con las otras divisiones del grupo.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              ¿Tiene una Oportunidad de Inversión?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ya sea que quiera proponer una nueva empresa o asociarse en un proyecto, nos encantaría escucharlo.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
                Hablemos
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Investments;
