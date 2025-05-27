
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Esconder tooltip após 5 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site e gostaria de agendar uma consulta. Podemos conversar?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5599984311884?text=${encodedMessage}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs border border-hadassa-beige/30 animate-bounce">
          <div className="flex items-start gap-2">
            <MessageCircle className="h-5 w-5 text-hadassa-brown mt-0.5" />
            <div>
              <p className="text-sm font-medium text-hadassa-brown">Olá! 👋</p>
              <p className="text-xs text-hadassa-brown/70">
                Precisa de ajuda? Chame no WhatsApp!
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 text-hadassa-brown/60 hover:text-hadassa-brown"
              onClick={() => setShowTooltip(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 right-4 transform translate-y-1/2">
            <div className="w-3 h-3 bg-white border-r border-b border-hadassa-beige/30 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        size="icon"
      >
        <Phone className="h-6 w-6" />
      </Button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;
