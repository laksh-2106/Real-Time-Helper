import { useEffect, useRef } from "react";
import { Header } from "@/components/medical/Header";
import { WelcomeSection } from "@/components/medical/WelcomeSection";
import { SymptomSuggestions } from "@/components/medical/SymptomSuggestions";
import { ChatMessage } from "@/components/medical/ChatMessage";
import { ChatInput } from "@/components/medical/ChatInput";
import { useMedicalChat } from "@/hooks/useMedicalChat";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { messages, isLoading, error, sendMessage, clearChat } = useMedicalChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen gradient-hero flex flex-col">
      <Header onClearChat={clearChat} hasMessages={hasMessages} />

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-4xl">
        {!hasMessages ? (
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <WelcomeSection />
            <div className="space-y-4">
              <p className="text-center text-sm font-medium text-muted-foreground">
                Quick start with common symptoms:
              </p>
              <SymptomSuggestions onSelect={sendMessage} />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto space-y-6 pb-6">
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-medical flex items-center justify-center shadow-soft">
                  <Loader2 className="w-5 h-5 text-primary-foreground animate-spin" />
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-card border border-border px-5 py-4 shadow-soft">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <span className="text-sm text-muted-foreground ml-2">Analyzing your symptoms...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div className="sticky bottom-0 pt-4 pb-4 bg-gradient-to-t from-background via-background to-transparent">
          <ChatInput onSend={sendMessage} isLoading={isLoading} />
          <p className="text-center text-xs text-muted-foreground mt-3">
            MediAssist can make mistakes. Always verify important health information with a professional.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
