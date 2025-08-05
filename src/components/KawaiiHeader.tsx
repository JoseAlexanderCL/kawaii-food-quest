import { Heart, Sparkles } from "lucide-react";
import kawaiiKitten from "@/assets/kawaii-kitten-logo.png";

interface KawaiiHeaderProps {
  showLogo?: boolean;
  title?: string;
  subtitle?: string;
}

export const KawaiiHeader = ({ 
  showLogo = true, 
  title = "¿Qué comemos hoy?",
  subtitle = "¡Hola! ¿Listo/a para elegir algo delicioso?" 
}: KawaiiHeaderProps) => {
  return (
    <div className="text-center mb-8">
      {showLogo && (
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img 
              src={kawaiiKitten} 
              alt="Gatito kawaii mascota" 
              className="w-24 h-32 animate-kawaii-bounce drop-shadow-floating"
            />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-kawaii-vivid-yellow animate-kawaii-wiggle" />
            <Heart className="absolute -bottom-1 -left-2 w-4 h-4 text-kawaii-crimson animate-kawaii-pulse" />
          </div>
        </div>
      )}
      
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4 animate-kawaii-float">
        {title}
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        {subtitle}
      </p>
      
      <div className="flex justify-center gap-2 mt-4">
        <Heart className="w-4 h-4 text-kawaii-crimson animate-kawaii-pulse" />
        <Sparkles className="w-4 h-4 text-kawaii-vivid-yellow animate-kawaii-wiggle" />
        <Heart className="w-4 h-4 text-kawaii-crimson animate-kawaii-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};
