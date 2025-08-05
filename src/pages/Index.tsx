import { useState, useEffect } from "react";
import { KawaiiHeader } from "@/components/KawaiiHeader";
import { QuestionCard } from "@/components/QuestionCard";
import { CategoryCard } from "@/components/CategoryCard";
import { KawaiiButton } from "@/components/KawaiiButton";
import { getTodaysQuestion, getRecommendedCategories, dailyQuestions, FoodCategory } from "@/data/questions";
import { RotateCcw, ChefHat } from "lucide-react";

type AppState = 'welcome' | 'question1' | 'question2' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recommendedCategories, setRecommendedCategories] = useState<FoodCategory[]>([]);
  const [todaysQuestion, setTodaysQuestion] = useState(getTodaysQuestion());

  useEffect(() => {
    // TODO: In a real app, this would update daily based on server time or stored date
    setTodaysQuestion(getTodaysQuestion());
  }, []);

  const handleStartQuestions = () => {
    setCurrentState('question1');
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (optionId: string) => {
    const newSelectedOptions = [...selectedOptions];
    
    if (currentQuestionIndex === 0) {
      newSelectedOptions[0] = optionId;
      setSelectedOptions(newSelectedOptions);
      setCurrentQuestionIndex(1);
      setCurrentState('question2');
    } else {
      newSelectedOptions[1] = optionId;
      setSelectedOptions(newSelectedOptions);
      
      // Get recommendations
      const categories = getRecommendedCategories(newSelectedOptions);
      setRecommendedCategories(categories);
      setCurrentState('results');
    }
  };

  const handleReset = () => {
    setCurrentState('welcome');
    setSelectedOptions([]);
    setCurrentQuestionIndex(0);
    setRecommendedCategories([]);
    // TODO: In a real app, this could fetch a new question or rotate to the next one
    setTodaysQuestion(getTodaysQuestion());
  };

  const handleSkipSecondQuestion = () => {
    // Get recommendations with only first answer
    const categories = getRecommendedCategories([selectedOptions[0]]);
    setRecommendedCategories(categories);
    setCurrentState('results');
  };

  if (currentState === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-kawaii p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <KawaiiHeader />
          
          <div className="text-center">
            <KawaiiButton
              variant="primary"
              size="lg"
              onClick={handleStartQuestions}
              className="animate-kawaii-bounce"
            >
              <ChefHat className="w-5 h-5 mr-2" />
              ¡Empezar!
            </KawaiiButton>
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'question1') {
    return (
      <div className="min-h-screen bg-gradient-kawaii p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <KawaiiHeader 
            showLogo={false}
            title="Pregunta 1 de 2"
            subtitle="¡Vamos a encontrar tu comida perfecta!"
          />
          
          <QuestionCard
            question={todaysQuestion}
            selectedOption={selectedOptions[0]}
            onOptionSelect={handleOptionSelect}
          />
          
          <div className="text-center mt-6">
            <KawaiiButton
              variant="outline"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Empezar de nuevo
            </KawaiiButton>
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'question2') {
    return (
      <div className="min-h-screen bg-gradient-kawaii p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <KawaiiHeader 
            showLogo={false}
            title="Pregunta 2 de 2"
            subtitle="¡Casi listo! Una preguntita más..."
          />
          
          <QuestionCard
            question={dailyQuestions[1]}
            selectedOption={selectedOptions[1]}
            onOptionSelect={handleOptionSelect}
          />
          
          <div className="text-center mt-6 space-x-4">
            <KawaiiButton
              variant="secondary"
              onClick={handleSkipSecondQuestion}
            >
              Omitir
            </KawaiiButton>
            
            <KawaiiButton
              variant="outline"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Empezar de nuevo
            </KawaiiButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-kawaii p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <KawaiiHeader 
          showLogo={false}
          title="¡Qué rico!"
          subtitle="Hoy te recomendamos..."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recommendedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="text-center">
          <KawaiiButton
            variant="primary"
            size="lg"
            onClick={handleReset}
            className="animate-kawaii-bounce"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            ¡Otra recomendación!
          </KawaiiButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
