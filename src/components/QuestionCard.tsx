import { Question, QuestionOption } from "@/data/questions";
import { KawaiiButton } from "./KawaiiButton";
import { Card } from "@/components/ui/card";

interface QuestionCardProps {
  question: Question;
  selectedOption?: string;
  onOptionSelect: (optionId: string) => void;
}

export const QuestionCard = ({ question, selectedOption, onOptionSelect }: QuestionCardProps) => {
  return (
    <Card className="p-6 bg-card border-kawaii-pink border-2 rounded-3xl animate-kawaii-float">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {question.text}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option: QuestionOption) => (
          <KawaiiButton
            key={option.id}
            variant="kawaii"
            size="lg"
            isSelected={selectedOption === option.id}
            onClick={() => onOptionSelect(option.id)}
            className="h-auto py-4 flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{option.emoji}</span>
            <span className="text-sm font-medium">{option.text}</span>
          </KawaiiButton>
        ))}
      </div>
    </Card>
  );
};