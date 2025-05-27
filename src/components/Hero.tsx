
import { Button } from "@/components/ui/button";
import { Star, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-hadassa-rose via-hadassa-beige/20 to-hadassa-nude/30 flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-hadassa-brown leading-tight">
                Desperte sua
                <span className="block text-hadassa-brown/80">beleza natural</span>
              </h1>
              <p className="text-lg md:text-xl text-hadassa-brown/70 max-w-lg">
                Tratamentos estéticos personalizados para realçar sua autoestima e bem-estar. 
                Descubra o cuidado que você merece.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-hadassa-brown">500+</div>
                <div className="text-sm text-hadassa-brown/60">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-hadassa-brown">3+</div>
                <div className="text-sm text-hadassa-brown/60">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-hadassa-brown">15+</div>
                <div className="text-sm text-hadassa-brown/60">Procedimentos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open("https://wa.me/5599984311884", "_blank")}
                className="bg-hadassa-brown hover:bg-hadassa-brown/90 text-white px-8 py-3 text-lg"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("procedimentos")?.scrollIntoView({ behavior: "smooth" })}
                className="border-hadassa-brown text-hadassa-brown hover:bg-hadassa-brown/10 px-8 py-3 text-lg"
              >
                Ver Procedimentos
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 text-hadassa-brown/60">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">Avaliação 5.0 no Google</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="Hadassa - Esteticista"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Heart className="h-6 w-6 text-hadassa-brown" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-hadassa-beige rounded-full p-3 shadow-lg animate-pulse">
                <Sparkles className="h-6 w-6 text-hadassa-brown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
