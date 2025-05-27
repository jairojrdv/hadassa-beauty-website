
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hadassa-rose/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-hadassa-brown">Hadassa</h1>
            <p className="text-xs text-hadassa-brown/70">Estética & Beleza</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("procedimentos")}
              className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium"
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.open("https://wa.me/5599984311884", "_blank")}
              className="bg-hadassa-brown hover:bg-hadassa-brown/90 text-white"
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-hadassa-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-hadassa-brown/20">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("procedimentos")}
                className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium text-left"
              >
                Procedimentos
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium text-left"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-hadassa-brown hover:text-hadassa-brown/80 transition-colors text-sm font-medium text-left"
              >
                Contato
              </button>
              <Button
                onClick={() => window.open("https://wa.me/5599984311884", "_blank")}
                className="bg-hadassa-brown hover:bg-hadassa-brown/90 text-white w-full mt-4"
              >
                Agendar WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
