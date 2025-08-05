import { useState } from "react";
import { KawaiiButton } from "./KawaiiButton";
import { foodCategories, FoodCategory } from "@/data/questions";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, RotateCcw } from "lucide-react";

interface KawaiiRuletaProps {
  onResult: (category: FoodCategory) => void;
  onReset: () => void;
}

export const KawaiiRuleta = ({ onResult, onReset }: KawaiiRuletaProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | null>(null);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedCategory(null);

    // Generar rotación aleatoria (múltiples vueltas completas + ángulo final)
    const spins = 5 + Math.random() * 5; // 5-10 vueltas
    const finalAngle = Math.random() * 360;
    const totalRotation = rotation + (spins * 360) + finalAngle;
    
    setRotation(totalRotation);

    // Después de la animación, seleccionar categoría
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foodCategories.length);
      const category = foodCategories[randomIndex];
      setSelectedCategory(category);
      setIsSpinning(false);
      
      // Mostrar resultado después de un pequeño delay
      setTimeout(() => {
        onResult(category);
      }, 1000);
    }, 3000);
  };

  const segmentAngle = 360 / foodCategories.length;

  return (
    <div className="min-h-screen bg-gradient-kawaii p-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-kawaii-vivid-yellow animate-kawaii-wiggle" />
            Ruleta All in
            <Heart className="w-8 h-8 text-kawaii-crimson animate-kawaii-pulse" />
          </h1>
          <p className="text-lg text-muted-foreground">¡Deja que el destino decida tu comida!</p>
        </div>

        {/* Ruleta */}
        <div className="relative mb-8">
          <div className="relative w-80 h-80 mx-auto">
            {/* Círculo de la ruleta */}
            <div 
              className="w-full h-full rounded-full border-8 border-kawaii-pink relative overflow-hidden transition-transform duration-3000 ease-out"
              style={{ 
                transform: `rotate(${rotation}deg)`,
                background: `conic-gradient(${foodCategories.map((cat, index) => {
                  const colors = [
                    'hsl(var(--kawaii-baby-pink))',
                    'hsl(var(--kawaii-soft-blue))',
                    'hsl(var(--kawaii-mint-green))',
                    'hsl(var(--kawaii-pale-yellow))',
                    'hsl(var(--kawaii-lavender))',
                    'hsl(var(--kawaii-peach))'
                  ];
                  const color = colors[index % colors.length];
                  const startAngle = (index * segmentAngle);
                  const endAngle = ((index + 1) * segmentAngle);
                  return `${color} ${startAngle}deg ${endAngle}deg`;
                }).join(', ')})`
              }}
            >
              {/* Segmentos con texto */}
              {foodCategories.map((category, index) => {
                const angle = (index * segmentAngle) + (segmentAngle / 2);
                const radius = 120;
                const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={category.id}
                    className="absolute text-xs font-bold text-gray-800 pointer-events-none"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      width: '80px',
                      textAlign: 'center'
                    }}
                  >
                    <span className="text-2xl block">{category.emoji}</span>
                  </div>
                );
              })}
            </div>

            {/* Puntero */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-kawaii-crimson"></div>
            </div>

            {/* Centro de la ruleta */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-kawaii-pink flex items-center justify-center z-10">
              <Sparkles className="w-6 h-6 text-kawaii-vivid-yellow animate-kawaii-wiggle" />
            </div>
          </div>
        </div>

        {/* Resultado */}
        {selectedCategory && (
          <Card className="p-6 mb-6 bg-card border-kawaii-pink border-2 rounded-3xl animate-kawaii-float">
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedCategory.emoji}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedCategory.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedCategory.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedCategory.dishes.map((dish, index) => (
                  <span key={index} className="bg-kawaii-baby-pink/20 text-foreground px-3 py-1 rounded-full text-sm">
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Botones */}
        <div className="space-y-4">
          <KawaiiButton
            variant="primary"
            size="lg"
            onClick={handleSpin}
            disabled={isSpinning}
            className={`${isSpinning ? 'animate-pulse' : 'animate-kawaii-bounce'}`}
          >
            {isSpinning ? '¡Girando!' : '¡A rodar!'}
          </KawaiiButton>

          <div>
            <KawaiiButton
              variant="outline"
              onClick={onReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Volver al inicio
            </KawaiiButton>
          </div>
        </div>
      </div>
    </div>
  );
};