import { FoodCategory } from "@/data/questions";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  category: FoodCategory;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card className="p-6 bg-gradient-food border-kawaii-mint border-2 rounded-3xl animate-kawaii-float hover:animate-kawaii-pulse transition-all duration-300 hover:scale-105">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-kawaii-wiggle">
          {category.emoji}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground">
          {category.name}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm">
          {category.description}
        </p>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-foreground opacity-80 mb-2">
            Platos típicos:
          </p>
          {category.dishes.slice(0, 3).map((dish, index) => (
            <span
              key={index}
              className="inline-block bg-kawaii-yellow px-2 py-1 rounded-full text-xs mx-1 mb-1 text-foreground"
            >
              {dish}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};