
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Heart } from "lucide-react";

const Partnerships = () => {
  const partners = [
    {
      name: "Vichy",
      category: "Cosmética Farmacêutica",
      description: "Produtos dermatológicos de alta qualidade para tratamentos faciais",
      icon: Award
    },
    {
      name: "La Roche-Posay",
      category: "Dermocosmética",
      description: "Soluções especializadas para peles sensíveis e com necessidades específicas",
      icon: Star
    },
    {
      name: "Eucerin",
      category: "Cuidados Dermocosméticos",
      description: "Produtos cientificamente comprovados para todos os tipos de pele",
      icon: Heart
    },
    {
      name: "ADCOS",
      category: "Cosmecêutica Nacional",
      description: "Tecnologia nacional de ponta para tratamentos estéticos avançados",
      icon: Award
    },
    {
      name: "Episage",
      category: "Biotecnologia",
      description: "Inovação em peptídeos e ativos para rejuvenescimento",
      icon: Star
    },
    {
      name: "Mesoestetic",
      category: "Medicina Estética",
      description: "Protocolos profissionais para tratamentos de alta performance",
      icon: Heart
    }
  ];

  const certifications = [
    "Certificação ANVISA para todos os procedimentos",
    "Formação continuada em técnicas avançadas",
    "Participação em congressos e workshops",
    "Protocolos de segurança rigorosos"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hadassa-brown mb-4">
            Parcerias & Qualidade
          </h2>
          <p className="text-lg text-hadassa-brown/70 max-w-2xl mx-auto">
            Trabalho apenas com as melhores marcas e produtos do mercado para garantir 
            resultados seguros e excepcionais
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-hadassa-beige/30 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-hadassa-beige/20 rounded-full p-3 group-hover:bg-hadassa-beige/30 transition-colors">
                    <partner.icon className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-hadassa-brown text-lg mb-1">{partner.name}</h3>
                    <p className="text-sm text-hadassa-brown/60 mb-2">{partner.category}</p>
                    <p className="text-sm text-hadassa-brown/70">{partner.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="bg-hadassa-rose/30 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-hadassa-brown mb-6">
                Compromisso com a Excelência
              </h3>
              <p className="text-hadassa-brown/70 mb-8">
                Invisto constantemente em formação e atualização para oferecer sempre o que há de mais 
                moderno e seguro em estética. Cada produto e técnica utilizada passa por rigorosos 
                critérios de qualidade e eficácia.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-hadassa-brown rounded-full p-1">
                      <Star className="h-3 w-3 text-white fill-white" />
                    </div>
                    <span className="text-hadassa-brown/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Produtos de qualidade utilizados pela Hadassa"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-hadassa-brown rounded-xl p-4 text-white shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Produtos Originais</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="bg-hadassa-beige/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-hadassa-brown" />
            </div>
            <h4 className="font-semibold text-hadassa-brown">Certificações</h4>
            <p className="text-sm text-hadassa-brown/60">Profissional qualificada</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-hadassa-beige/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <Star className="h-8 w-8 text-hadassa-brown" />
            </div>
            <h4 className="font-semibold text-hadassa-brown">Qualidade</h4>
            <p className="text-sm text-hadassa-brown/60">Produtos premium</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-hadassa-beige/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-hadassa-brown" />
            </div>
            <h4 className="font-semibold text-hadassa-brown">Cuidado</h4>
            <p className="text-sm text-hadassa-brown/60">Atendimento personalizado</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-hadassa-beige/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-hadassa-brown" />
            </div>
            <h4 className="font-semibold text-hadassa-brown">Segurança</h4>
            <p className="text-sm text-hadassa-brown/60">Protocolos rigorosos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
