import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Target, Eye, Award } from "lucide-react";

const ElGrupo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="El Grupo"
        description="Conozca Biagi & Varnoux Group: nuestra misión, visión, valores fundamentales y modelo de gestión estratégica como holding empresarial líder en soluciones integradas de negocio."
        keywords="holding empresarial, gestión estratégica, valores corporativos, misión visión valores, asignación de capital, gestión de riesgo, sinergia operativa"
      />
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6 fade-in">
              Sobre <span className="text-primary">Biagi & Varnoux Group</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-4 fade-in-delay">
              Definiendo la Estrategia Global
            </p>
            <p className="text-lg text-muted-foreground fade-in-delay-2">
              Biagi & Varnoux Group es una sociedad holding que define la estrategia global, 
              asigna el capital y gestiona el riesgo de sus divisiones operativas.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="text-center fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-muted-foreground">
                  Facilitar el crecimiento y la expansión de nuestros socios y clientes a través de 
                  soluciones de negocio integradas que combinan comercio, logística, estrategia e inversión.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center fade-in-delay">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-muted-foreground">
                  Ser el holding de servicios empresariales más dinámico e innovador de la región, 
                  reconocido por crear valor sostenible a través de la sinergia de nuestras divisiones.
                </p>
              </div>

              {/* Values Preview */}
              <div className="text-center fade-in-delay-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Nuestros Valores
                </h3>
                <p className="text-muted-foreground">
                  Integridad, sinergia, visión de futuro y eficiencia guían cada una de nuestras 
                  decisiones y acciones empresariales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Detail */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
              Nuestros Valores Fundamentales
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Integridad</h3>
                <p className="text-muted-foreground">
                  Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales, 
                  construyendo confianza duradera con nuestros socios y clientes.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover fade-in-delay">
                <h3 className="text-xl font-semibold text-primary mb-3">Sinergia</h3>
                <p className="text-muted-foreground">
                  Creemos en el poder de la colaboración. Nuestras divisiones trabajan en conjunto 
                  para crear soluciones más poderosas que la suma de sus partes individuales.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover fade-in-delay-2">
                <h3 className="text-xl font-semibold text-primary mb-3">Visión de Futuro</h3>
                <p className="text-muted-foreground">
                  Anticipamos las tendencias del mercado y nos adaptamos proactivamente, 
                  posicionando a nuestros clientes y al grupo para el éxito a largo plazo.
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border-2 border-border gold-border-hover fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Eficiencia</h3>
                <p className="text-muted-foreground">
                  Optimizamos recursos y procesos para entregar el máximo valor, 
                  eliminando complejidades innecesarias y enfocándonos en resultados medibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Gestión Estratégica
              </h2>
              <p className="text-lg text-muted-foreground">
                Como holding, nuestra función principal es coordinar y potenciar las capacidades 
                de nuestras divisiones operativas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Asignación de Capital</h3>
                <p className="text-sm text-muted-foreground">
                  Distribuimos recursos estratégicamente entre nuestras divisiones para maximizar 
                  el retorno y apoyar el crecimiento sostenible.
                </p>
              </div>

              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Gestión de Riesgo</h3>
                <p className="text-sm text-muted-foreground">
                  Implementamos marcos robustos de evaluación y mitigación de riesgos para 
                  proteger los activos del grupo y sus stakeholders.
                </p>
              </div>

              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Dirección Estratégica</h3>
                <p className="text-sm text-muted-foreground">
                  Definimos objetivos claros y alineamos las operaciones de todas las divisiones 
                  hacia una visión común de crecimiento.
                </p>
              </div>

              <div className="p-6 bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">Sinergia Operativa</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitamos la colaboración entre divisiones para crear oportunidades únicas 
                  y entregar soluciones integradas al mercado.
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

export default ElGrupo;
