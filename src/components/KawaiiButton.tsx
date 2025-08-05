import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface KawaiiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'kawaii';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isSelected?: boolean;
}

export const KawaiiButton = forwardRef<HTMLButtonElement, KawaiiButtonProps>(
  ({ className, variant = 'kawaii', size = 'md', children, isSelected = false, ...props }, ref) => {
    const baseStyles = "rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
    
    const variants = {
      primary: "bg-kawaii-crimson text-white hover:bg-opacity-90 drop-shadow-kawaii",
      secondary: "bg-kawaii-blue text-foreground hover:bg-opacity-80",
      outline: "border-2 border-kawaii-pink bg-background text-foreground hover:bg-kawaii-pink hover:text-white",
      kawaii: `${isSelected 
        ? 'bg-gradient-accent text-foreground border-2 border-kawaii-crimson' 
        : 'bg-kawaii-pink hover:bg-kawaii-blue'} text-foreground drop-shadow-kawaii`
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isSelected && "animate-kawaii-pulse",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

KawaiiButton.displayName = "KawaiiButton";