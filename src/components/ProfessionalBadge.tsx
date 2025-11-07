import { Shield, Award, Scale } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProfessionalBadge = () => {
  return (
    <div className="bg-trust-light border-2 border-trust/20 rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="bg-trust/10 p-3 rounded-full">
            <Shield className="h-6 w-6 text-trust" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Lid van de</p>
            <p className="text-xs text-muted-foreground">Nederlandse Orde van Advocaten</p>
          </div>
        </div>
        
        <div className="hidden md:block h-12 w-px bg-border"></div>
        
        <div className="flex items-center gap-3">
          <div className="bg-trust/10 p-3 rounded-full">
            <Award className="h-6 w-6 text-trust" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Gecertificeerde</p>
            <p className="text-xs text-muted-foreground">MfN Mediators</p>
          </div>
        </div>
        
        <div className="hidden md:block h-12 w-px bg-border"></div>
        
        <div className="flex items-center gap-3">
          <div className="bg-trust/10 p-3 rounded-full">
            <Scale className="h-6 w-6 text-trust" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">30+ jaar</p>
            <p className="text-xs text-muted-foreground">Juridische Ervaring</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBadge;
