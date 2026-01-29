import { Shield, Clock, Brain, AlertTriangle } from "lucide-react";

export const WelcomeSection = () => {
  const features = [
    { icon: Brain, label: "Smart Analysis", desc: "AI-powered insights" },
    { icon: Clock, label: "24/7 Available", desc: "Always here to help" },
    { icon: Shield, label: "Private & Secure", desc: "Your data is safe" },
    { icon: AlertTriangle, label: "Know When", desc: "To see a doctor" },
  ];

  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Welcome to <span className="text-gradient">MediAssist</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered health companion. Describe your symptoms and get instant, helpful medical information and guidance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-medical-teal-light flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </div>
          );
        })}
      </div>

      <div className="max-w-2xl mx-auto p-4 rounded-xl bg-card/50 border border-border/50">
        <p className="text-xs text-muted-foreground leading-relaxed">
          ⚠️ <strong>Important:</strong> MediAssist provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have.
        </p>
      </div>
    </div>
  );
};
