import { useState } from "react";
import { KawaiiHeader } from "@/components/KawaiiHeader";
import { QuestionCard } from "@/components/QuestionCard";
import { CategoryCard } from "@/components/CategoryCard";
import { KawaiiButton } from "@/components/KawaiiButton";
import { KawaiiRuleta } from "@/components/KawaiiRuleta";
import { assistedQuestions, FoodCategory, foodCategories } from "@/data/questions";
import { recommendTop3 } from "@/lib/recommend";
import { RotateCcw, ChefHat, Dice6, Heart } from "lucide-react";

type AppState = 'welcome' | 'mode-selection' | 'ruleta' | 'question' | 'results';
type AppMode = 'ruleta' | 'asistido';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [appMode, setAppMode] = useState<AppMode | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recommendedCategories, setRecommendedCategories] = useState<FoodCategory[]>([]);

  const handleStartApp = () => {
    setCurrentState('mode-selection');
  };

  const handleModeSelection = (mode: AppMode) => {
    setAppMode(mode);
    if (mode === 'ruleta') {
      setCurrentState('ruleta');
    } else {
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setCurrentState('question');
    }
  };

  const handleOptionSelect = (optionId: string) => {
    const questionId = assistedQuestions[currentQuestionIndex].id;

    if (currentQuestionIndex === 0 && optionId === 'nada') {
      alert('Haz matado a un pudú :(');
    }

    const newSelectedAnswers = { ...selectedAnswers, [questionId]: optionId };
    setSelectedAnswers(newSelectedAnswers);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < assistedQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      const categoryIds = recommendTop3(newSelectedAnswers, assistedQuestions);
      const categories = categoryIds
        .map((id) => foodCategories.find((c) => c.id === id))
        .filter(Boolean) as FoodCategory[];
      setRecommendedCategories(categories);
      setCurrentState('results');
    }
  };

  const handleRuletaResult = (category: FoodCategory) => {
    setRecommendedCategories([category]);
    setCurrentState('results');
  };

  const handleReset = () => {
    setCurrentState('welcome');
    setAppMode(null);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setRecommendedCategories([]);
  };

  const handleSkipLastQuestion = () => {
    const categoryIds = recommendTop3(selectedAnswers, assistedQuestions);
    const categories = categoryIds
      .map((id) => foodCategories.find((c) => c.id === id))
      .filter(Boolean) as FoodCategory[];
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
              onClick={handleStartApp}
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

  if (currentState === 'mode-selection') {
    return (
      <div className="min-h-screen bg-gradient-kawaii p-4 flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <KawaiiHeader 
            showLogo={false}
            title="¿Cómo quieres decidir?"
            subtitle="Elige tu modo favorito"
          />
          
          <div className="space-y-4">
            <KawaiiButton
              variant="kawaii"
              size="lg"
              onClick={() => handleModeSelection('ruleta')}
              className="w-full h-auto py-6 flex flex-col items-center gap-3"
            >
              <Dice6 className="w-8 h-8" />
              <div className="text-center">
                <div className="font-bold text-lg">Ruleta All in</div>
                <div className="text-sm opacity-80">¡Deja que la suerte decida!</div>
              </div>
            </KawaiiButton>

            <KawaiiButton
              variant="kawaii"
              size="lg"
              onClick={() => handleModeSelection('asistido')}
              className="w-full h-auto py-6 flex flex-col items-center gap-3"
            >
              <Heart className="w-8 h-8" />
              <div className="text-center">
                <div className="font-bold text-lg">Modo Asistido</div>
                <div className="text-sm opacity-80">Te ayudo con preguntas</div>
              </div>
            </KawaiiButton>
          </div>

          <div className="text-center mt-6">
            <KawaiiButton
              variant="outline"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Volver
            </KawaiiButton>
          </div>
        </div>
      </div>
    );
  }

  if (currentState === 'ruleta') {
    return (
      <KawaiiRuleta 
        onResult={handleRuletaResult}
        onReset={handleReset}
      />
    );
  }

  if (currentState === 'question') {
    const totalQuestions = assistedQuestions.length;
    const currentQuestion = assistedQuestions[currentQuestionIndex];
    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === totalQuestions - 1;

    return (
      <div className="min-h-screen bg-gradient-kawaii p-4">
        <div className="max-w-2xl mx-auto pt-8">
          <KawaiiHeader
            showLogo={false}
            title={`Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}${isFirst ? ' 💕' : ''}`}
            subtitle={isFirst ? '¡Una preguntita importante!' : isLast ? '¡Última pregunta!' : '¡Vamos a encontrar tu comida perfecta!'}
          />

          <QuestionCard
            question={currentQuestion}
            selectedOption={selectedAnswers[currentQuestion.id]}
            onOptionSelect={handleOptionSelect}
          />

          <div className="text-center mt-6">
            {isLast ? (
              <div className="space-x-4">
                <KawaiiButton
                  variant="secondary"
                  onClick={handleSkipLastQuestion}
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
            ) : (
              <KawaiiButton
                variant="outline"
                onClick={handleReset}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Empezar de nuevo
              </KawaiiButton>
            )}
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
