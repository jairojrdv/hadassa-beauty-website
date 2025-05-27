
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

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
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.485"/>
        </svg>
      </Button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;
