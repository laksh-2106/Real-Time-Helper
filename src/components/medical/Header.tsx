import { Stethoscope, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onClearChat: () => void;
  hasMessages: boolean;
}

export const Header = ({ onClearChat, hasMessages }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl gradient-medical flex items-center justify-center shadow-glow">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MediAssist</h1>
              <p className="text-xs text-muted-foreground">AI Health Consultant</p>
            </div>
          </div>
          {hasMessages && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearChat}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className="w-4 h-4" />
              New Chat
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
