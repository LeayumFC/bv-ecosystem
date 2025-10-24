import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DivisionCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const DivisionCard = ({ title, subtitle, description, icon: Icon, link }: DivisionCardProps) => {
  return (
    <Card className="p-6 hover-lift gold-border-hover border-2 border-border bg-card">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-primary font-medium mb-3">
          {subtitle}
        </p>
        
        <p className="text-muted-foreground mb-6 flex-grow">
          {description}
        </p>
        
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors font-medium group"
        >
          <span>Ver más</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
};

export default DivisionCard;
