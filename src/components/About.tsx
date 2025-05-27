
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada cliente é única, por isso criamos tratamentos exclusivos para suas necessidades."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Formação continuada e técnicas atualizadas para os melhores resultados."
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Um ambiente acolhedor onde você se sente especial e cuidada."
    },
    {
      icon: Sparkles,
      title: "Resultados Naturais",
      description: "Realçamos sua beleza natural com procedimentos seguros e eficazes."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
              alt="Hadassa no consultório"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-hadassa-beige rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-hadassa-brown">500+</div>
                <div className="text-sm text-hadassa-brown/60">Clientes Felizes</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-hadassa-brown mb-4">
                Sobre Hadassa
              </h2>
              <p className="text-lg text-hadassa-brown/70 mb-6">
                Sou Hadassa, esteticista formada e apaixonada por realçar a beleza natural de cada mulher. 
                Com mais de 3 anos de experiência, dedico-me a proporcionar tratamentos personalizados 
                que valorizam sua autoestima e bem-estar.
              </p>
              <p className="text-lg text-hadassa-brown/70">
                Acredito que cada pessoa é única e merece um cuidado especial. Por isso, 
                trabalho com técnicas modernas e produtos de qualidade para garantir 
                resultados naturais e duradouros.
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-hadassa-rose/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-hadassa-brown mb-4">Formação & Especializações</h3>
              <ul className="space-y-2 text-hadassa-brown/70">
                <li>• Técnica em Estética e Cosmética</li>
                <li>• Especialização em Harmonização Facial</li>
                <li>• Certificação em Tratamentos Corporais</li>
                <li>• Curso Avançado em Skincare</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-hadassa-brown text-center mb-12">
            Meus Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-hadassa-beige/30 hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-hadassa-beige/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <h4 className="font-semibold text-hadassa-brown mb-2">{value.title}</h4>
                  <p className="text-sm text-hadassa-brown/60">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
