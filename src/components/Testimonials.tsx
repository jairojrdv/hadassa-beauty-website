
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      age: 28,
      procedure: "Harmonização Facial",
      rating: 5,
      text: "A Hadassa é simplesmente incrível! Fez minha harmonização facial com tanto cuidado e carinho. O resultado ficou exatamente como eu sonhava - natural e elegante. Recomendo de olhos fechados!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Ana Carolina",
      age: 35,
      procedure: "Skincare Profissional",
      rating: 5,
      text: "Depois dos tratamentos faciais com a Hadassa, minha pele está completamente renovada! Ela entende muito bem as necessidades da pele e sempre indica o melhor tratamento. Profissional excepcional!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Juliana Santos",
      age: 32,
      procedure: "Drenagem Linfática",
      rating: 5,
      text: "As sessões de drenagem com a Hadassa são transformadoras! Além dos resultados visíveis, é um momento de relaxamento e autocuidado. Saio de lá renovada e mais confiante.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Fernanda Lima",
      age: 29,
      procedure: "Microagulhamento",
      rating: 5,
      text: "Estava com muitas marcas de acne e a Hadassa me ajudou demais com o microagulhamento. Minha pele está lisa e uniforme. Ela é muito cuidadosa e explica todo o processo. Amei!",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carla Mendes",
      age: 40,
      procedure: "Tratamento Anti-aging",
      rating: 5,
      text: "Hadassa tem mãos mágicas! Faço tratamentos anti-aging com ela há 1 ano e os resultados são impressionantes. Parece que voltei no tempo! Além de competente, é super carinhosa.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priscila Costa",
      age: 26,
      procedure: "Depilação a Laser",
      rating: 5,
      text: "Finalmente me livrei dos pelos indesejados! A Hadassa tornou todo o processo muito confortável e seguro. O equipamento é de última geração e ela é super profissional. Resultado perfeito!",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-hadassa-rose/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hadassa-brown mb-4">
            O que minhas clientes dizem
          </h2>
          <p className="text-lg text-hadassa-brown/70 max-w-2xl mx-auto">
            Depoimentos reais de mulheres que transformaram sua autoestima e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-hadassa-beige/30 hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-hadassa-beige mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-hadassa-brown/80 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-hadassa-beige text-hadassa-brown">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-hadassa-brown">{testimonial.name}</div>
                    <div className="text-sm text-hadassa-brown/60">{testimonial.age} anos</div>
                    <div className="text-sm text-hadassa-brown/60">{testimonial.procedure}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hadassa-brown">500+</div>
              <div className="text-sm text-hadassa-brown/60">Clientes Satisfeitas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hadassa-brown">5.0</div>
              <div className="text-sm text-hadassa-brown/60">Avaliação Média</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hadassa-brown">98%</div>
              <div className="text-sm text-hadassa-brown/60">Recomendam</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hadassa-brown">3+</div>
              <div className="text-sm text-hadassa-brown/60">Anos de Experiência</div>
            </div>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-hadassa-brown mb-4">
            Avaliações no Google
          </h3>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-hadassa-brown">5.0</span>
            <span className="text-hadassa-brown/60">(50+ avaliações)</span>
          </div>
          <p className="text-hadassa-brown/70 mb-6">
            Confira mais depoimentos reais no nosso perfil do Google
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
