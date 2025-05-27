
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Harmonização Facial",
      description: "Realce seus traços naturais com procedimentos minimamente invasivos e resultados naturais.",
      duration: "60-90 min",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      features: ["Preenchimento labial", "Bigodinho chinês", "Rinomodelação", "Harmonização facial completa"]
    },
    {
      title: "Skincare Profissional",
      description: "Tratamentos faciais personalizados para todos os tipos de pele, rejuvenescimento e hidratação profunda.",
      duration: "45-60 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      features: ["Limpeza profunda", "Hidratação", "Peeling químico", "Radiofrequência"]
    },
    {
      title: "Tratamentos Corporais",
      description: "Procedimentos estéticos corporais para modelagem, redução de medidas e melhora da autoestima.",
      duration: "60-120 min",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      features: ["Drenagem linfática", "Massagem modeladora", "Criolipólise", "Radiofrequência corporal"]
    },
    {
      title: "Depilação Definitiva",
      description: "Liberdade e praticidade com depilação a laser de última geração, segura e eficaz.",
      duration: "30-90 min",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
      features: ["Laser de diodo", "Todas as áreas", "Pele sensível", "Resultados duradouros"]
    },
    {
      title: "Microagulhamento",
      description: "Renovação celular para tratamento de cicatrizes, rugas, flacidez e melhora da textura da pele.",
      duration: "45-60 min",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      features: ["Renovação celular", "Produção de colágeno", "Cicatrizes de acne", "Anti-aging"]
    },
    {
      title: "Massagem Relaxante",
      description: "Momento de autocuidado e relaxamento com técnicas que aliviam tensões e promovem bem-estar.",
      duration: "60-90 min",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      features: ["Relaxamento profundo", "Alívio de tensões", "Bem-estar", "Autocuidado"]
    }
  ];

  return (
    <section id="procedimentos" className="py-20 bg-hadassa-rose/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hadassa-brown mb-4">
            Procedimentos Estéticos
          </h2>
          <p className="text-lg text-hadassa-brown/70 max-w-2xl mx-auto">
            Tratamentos personalizados com as melhores técnicas e tecnologias para realçar sua beleza natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-hadassa-beige/30 overflow-hidden animate-fade-in">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{service.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-hadassa-brown text-xl mb-2">{service.title}</CardTitle>
                <div className="flex items-center gap-2 text-hadassa-brown/60 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-hadassa-brown/70 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Sparkles className="h-3 w-3 text-hadassa-brown" />
                      <span className="text-sm text-hadassa-brown/60">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={() => window.open(`https://wa.me/5599984311884?text=Olá! Gostaria de agendar o procedimento: ${service.title}`, "_blank")}
                  className="w-full bg-hadassa-brown hover:bg-hadassa-brown/90 text-white"
                >
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-hadassa-brown mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-hadassa-brown/70 mb-6">
            Entre em contato comigo para conversarmos sobre suas necessidades específicas
          </p>
          <Button
            onClick={() => window.open("https://wa.me/5599984311884?text=Olá! Gostaria de mais informações sobre os procedimentos disponíveis.", "_blank")}
            className="bg-hadassa-brown hover:bg-hadassa-brown/90 text-white px-8 py-3"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
