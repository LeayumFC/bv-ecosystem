import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, BarChart3, Rocket } from "lucide-react";

const Sinergia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6 fade-in">
              La Sinergia del <span className="text-primary">Grupo</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-4 fade-in-delay">
              Cómo Funciona Nuestro Ecosistema
            </p>
            <p className="text-lg text-muted-foreground fade-in-delay-2">
              Detección, Análisis y Ejecución trabajando en perfecta armonía.
            </p>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Step 1: Detection */}
              <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    <span className="text-primary">Paso 1:</span> Detección
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong className="text-foreground">La Trinchera del Mercado</strong>
                  </p>
                  <p className="text-muted-foreground mb-4">
                    B&V Commerce y B&V Logistics están en primera línea, interactuando 
                    diariamente con el mercado. Detectan problemas, ineficiencias y 
                    oportunidades no aprovechadas.
                  </p>
                  <div className="p-4 bg-accent/10 border-l-4 border-primary rounded">
                    <p className="text-sm text-muted-foreground italic">
                      Ejemplo: "El servicio técnico para laptops es pésimo y caro. 
                      Nuestros clientes se quejan constantemente."
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-secondary to-background p-8 rounded-lg border-2 border-primary">
                    <h3 className="font-semibold text-foreground mb-4">División Responsable</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">B&V Commerce</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">B&V Logistics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-primary to-accent" />
              </div>

              {/* Step 2: Analysis */}
              <div className="grid lg:grid-cols-2 gap-12 items-center fade-in-delay">
                <div>
                  <div className="bg-gradient-to-br from-secondary to-background p-8 rounded-lg border-2 border-accent">
                    <h3 className="font-semibold text-foreground mb-4">División Responsable</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">B&V Advisory</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    <span className="text-accent">Paso 2:</span> Análisis
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong className="text-foreground">La Estrategia Inteligente</strong>
                  </p>
                  <p className="text-muted-foreground mb-4">
                    B&V Advisory toma la información detectada, realiza un análisis profundo 
                    del mercado y confirma si existe una oportunidad de negocio real, 
                    rentable y sostenible.
                  </p>
                  <div className="p-4 bg-highlight/10 border-l-4 border-accent rounded">
                    <p className="text-sm text-muted-foreground italic">
                      Resultado: "Confirmado. Existe un mercado de $X millones con márgenes 
                      del Y% para servicio técnico especializado."
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-accent to-highlight" />
              </div>

              {/* Step 3: Execution */}
              <div className="grid lg:grid-cols-2 gap-12 items-center fade-in-delay-2">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-highlight/20 rounded-full mb-6">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    <span className="text-primary">Paso 3:</span> Ejecución
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong className="text-foreground">La Doble Vía del Valor</strong>
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Con la oportunidad validada, el grupo tiene dos caminos para monetizarla:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary border-l-4 border-primary rounded">
                      <h4 className="font-semibold text-foreground mb-2">
                        Opción A: Para el Cliente
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        B&V Advisory ofrece el plan estratégico completo a un cliente 
                        para que ellos desarrollen el negocio. Cobramos 
                        por la consultoría.
                      </p>
                    </div>

                    <div className="p-4 bg-secondary border-l-4 border-primary rounded">
                      <h4 className="font-semibold text-foreground mb-2">
                        Opción B: Para el Grupo
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        B&V Investments crea esa empresa de servicio técnico como un 
                        nuevo negocio del grupo, capturando todo el valor de la oportunidad.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-secondary to-background p-8 rounded-lg border-2 border-highlight">
                    <h3 className="font-semibold text-foreground mb-4">Divisiones Involucradas</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm">B&V Advisory (Venta)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-highlight rounded-full" />
                        <span className="text-sm">B&V Investments (Creación)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Creation Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Creación de Valor Integral
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              De esta forma, el grupo genera ingresos múltiples a través de su ecosistema integrado:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="text-3xl font-serif font-bold text-primary mb-2">01</div>
                <h3 className="font-semibold text-foreground mb-2">Commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Vendiendo productos y representando marcas
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="text-3xl font-serif font-bold text-primary mb-2">02</div>
                <h3 className="font-semibold text-foreground mb-2">Logistics</h3>
                <p className="text-sm text-muted-foreground">
                  Moviendo productos y gestionando cadenas de suministro
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="text-3xl font-serif font-bold text-primary mb-2">03</div>
                <h3 className="font-semibold text-foreground mb-2">Advisory</h3>
                <p className="text-sm text-muted-foreground">
                  Vendiendo inteligencia y estrategia de mercado
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover">
                <div className="text-3xl font-serif font-bold text-primary mb-2">04</div>
                <h3 className="font-semibold text-foreground mb-2">Investments</h3>
                <p className="text-sm text-muted-foreground">
                  Creando y adquiriendo nuevos negocios rentables
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Sinergia;
