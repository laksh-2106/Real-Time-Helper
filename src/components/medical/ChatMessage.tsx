import { User, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-4 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-soft",
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "gradient-medical text-primary-foreground"
        )}
      >
        {isUser ? <User className="w-5 h-5" /> : <Stethoscope className="w-5 h-5" />}
      </div>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-5 py-4 shadow-soft",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-sm"
            : "bg-card text-card-foreground rounded-tl-sm border border-border"
        )}
      >
        <div className="text-sm leading-relaxed prose prose-sm max-w-none dark:prose-invert">
          {isUser ? (
            content
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
};
