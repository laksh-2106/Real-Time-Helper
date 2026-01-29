import { Thermometer, HeartPulse, Brain, Pill, Activity, Stethoscope } from "lucide-react";

interface SymptomSuggestionsProps {
  onSelect: (symptom: string) => void;
}

const suggestions = [
  {
    icon: Thermometer,
    label: "Fever & Cold",
    query: "I have a fever with body aches and runny nose. What could it be?",
  },
  {
    icon: HeartPulse,
    label: "Chest Pain",
    query: "I'm experiencing mild chest discomfort. What should I know?",
  },
  {
    icon: Brain,
    label: "Headache",
    query: "I have recurring headaches that last for hours. What could cause this?",
  },
  {
    icon: Activity,
    label: "Fatigue",
    query: "I've been feeling extremely tired lately even with enough sleep. Why?",
  },
  {
    icon: Pill,
    label: "Stomach Issues",
    query: "I have stomach pain and digestive issues. What remedies can help?",
  },
  {
    icon: Stethoscope,
    label: "General Checkup",
    query: "What are some general health tips for maintaining good health?",
  },
];

export const SymptomSuggestions = ({ onSelect }: SymptomSuggestionsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {suggestions.map((suggestion, index) => {
        const Icon = suggestion.icon;
        return (
          <button
            key={index}
            onClick={() => onSelect(suggestion.query)}
            className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-full bg-medical-teal-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {suggestion.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
