
import { Button } from "@/components/ui/button";
import { Heart, Instagram, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-hadassa-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Hadassa</h3>
              <p className="text-white/80">Estética & Beleza</p>
            </div>
            <p className="text-white/70 text-sm">
              Desperte sua beleza natural com tratamentos estéticos personalizados 
              e de qualidade em Imperatriz - MA.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Feito com carinho para você</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                Início
              </button>
              <button
                onClick={() => {
                  document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  document.getElementById("procedimentos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                Procedimentos
              </button>
              <button
                onClick={() => {
                  document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                Galeria
              </button>
              <button
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Principais Serviços</h4>
            <div className="space-y-2">
              <p className="text-white/70 text-sm">Harmonização Facial</p>
              <p className="text-white/70 text-sm">Skincare Profissional</p>
              <p className="text-white/70 text-sm">Tratamentos Corporais</p>
              <p className="text-white/70 text-sm">Depilação Definitiva</p>
              <p className="text-white/70 text-sm">Microagulhamento</p>
              <p className="text-white/70 text-sm">Massagem Relaxante</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/70 text-sm">(99) 98431-1884</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-white/60" />
                <span className="text-white/70 text-sm">@hadassa.estetica</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-white/70 text-sm">Imperatriz - MA</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-white/60 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Seg à Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Pronta para se sentir ainda mais bonita?</h4>
            <p className="text-white/70 mb-6">Agende sua consulta e descubra como posso ajudar você</p>
            <Button
              onClick={() => window.open("https://wa.me/5599984311884", "_blank")}
              variant="secondary"
              className="bg-white text-hadassa-brown hover:bg-gray-100"
            >
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Hadassa Estética. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToTop}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Voltar ao topo
              </button>
              <span className="text-white/40">•</span>
              <p className="text-white/60 text-sm">
                Desenvolvido com ❤️ para realçar sua beleza
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
