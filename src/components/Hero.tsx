import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Biagi & Varnoux Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 fade-in">
            Biagi & Varnoux
            <span className="block text-primary mt-2">Group</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 fade-in-delay">
            Integrando Comercio, Logística, Estrategia e Inversión
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-delay-2">
            <Link to="/sinergia">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground font-medium">
                Conozca Nuestro Ecosistema
              </Button>
            </Link>
            
            <Link to="/contacto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contáctenos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
