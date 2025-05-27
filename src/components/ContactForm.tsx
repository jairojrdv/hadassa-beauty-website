
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Send, MapPin, Phone, Clock, Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Número de celular inválido"),
  procedure: z.string().min(1, "Selecione um procedimento"),
  date: z.date().optional(),
  message: z.string().optional(),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      procedure: "",
      message: "",
    },
  });

  const procedures = [
    "Harmonização Facial",
    "Skincare Profissional",
    "Tratamentos Corporais",
    "Depilação Definitiva",
    "Microagulhamento",
    "Massagem Relaxante",
    "Drenagem Linfática",
    "Peeling Químico",
    "Radiofrequência",
    "Outros - Especificar na mensagem"
  ];

  // Função para verificar se é fim de semana
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = domingo, 6 = sábado
  };

  // Função para verificar feriados brasileiros (básicos)
  const isBrazilianHoliday = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Feriados fixos principais
    const holidays = [
      { month: 1, day: 1 },   // Ano Novo
      { month: 4, day: 21 },  // Tiradentes
      { month: 5, day: 1 },   // Dia do Trabalho
      { month: 9, day: 7 },   // Independência
      { month: 10, day: 12 }, // Nossa Senhora Aparecida
      { month: 11, day: 2 },  // Finados
      { month: 11, day: 15 }, // Proclamação da República
      { month: 12, day: 25 }, // Natal
    ];
    
    return holidays.some(holiday => holiday.month === month && holiday.day === day);
  };

  // Função para desabilitar datas
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return (
      date < today || // Datas passadas
      isWeekend(date) || // Fins de semana
      isBrazilianHoliday(date) // Feriados
    );
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Formatar a mensagem para o WhatsApp
      let message = `*Nova Solicitação de Agendamento*\n\n`;
      message += `*Nome:* ${values.name}\n`;
      message += `*Telefone:* ${values.phone}\n`;
      message += `*Procedimento:* ${values.procedure}\n`;
      
      if (values.date) {
        message += `*Data Preferencial:* ${format(values.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}\n`;
      }
      
      if (values.message) {
        message += `*Mensagem Adicional:* ${values.message}\n`;
      }
      
      message += `\nEnviado através do site da Hadassa Estética`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5599984311884?text=${encodedMessage}`;

      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');

      // Limpar formulário
      form.reset();
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionada para o WhatsApp. Aguarde meu retorno!",
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-hadassa-rose/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hadassa-brown mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-lg text-hadassa-brown/70 max-w-2xl mx-auto">
            Preencha o formulário abaixo e vamos conversar sobre como posso ajudar você a alcançar seus objetivos estéticos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="border-hadassa-beige/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-hadassa-brown">Formulário de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-hadassa-brown">Nome Completo *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Digite seu nome completo" 
                            className="border-hadassa-beige/50 focus:border-hadassa-brown"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-hadassa-brown">Celular/WhatsApp *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(99) 99999-9999" 
                            className="border-hadassa-beige/50 focus:border-hadassa-brown"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="procedure"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-hadassa-brown">Procedimento de Interesse *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-hadassa-beige/50 focus:border-hadassa-brown">
                              <SelectValue placeholder="Selecione um procedimento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {procedures.map((procedure) => (
                              <SelectItem key={procedure} value={procedure}>
                                {procedure}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-hadassa-brown">Data Preferencial (Opcional)</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal border-hadassa-beige/50 hover:border-hadassa-brown",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                                ) : (
                                  <span>Selecione uma data</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={disabledDays}
                              initialFocus
                              className="pointer-events-auto"
                              locale={ptBR}
                            />
                          </PopoverContent>
                        </Popover>
                        <p className="text-xs text-hadassa-brown/60">
                          *Não atendo aos finais de semana e feriados
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-hadassa-brown">Mensagem Adicional (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-me mais sobre suas expectativas ou dúvidas..."
                            className="border-hadassa-beige/50 focus:border-hadassa-brown min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-hadassa-brown hover:bg-hadassa-brown/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar pelo WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Contato Principal */}
            <Card className="border-hadassa-beige/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-hadassa-brown">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-hadassa-beige/20 rounded-full p-3">
                    <Phone className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <div>
                    <p className="font-semibold text-hadassa-brown">WhatsApp</p>
                    <p className="text-hadassa-brown/70">(99) 98431-1884</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-hadassa-beige/20 rounded-full p-3">
                    <Instagram className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <div>
                    <p className="font-semibold text-hadassa-brown">Instagram</p>
                    <p className="text-hadassa-brown/70">@hadassa.estetica</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-hadassa-beige/20 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <div>
                    <p className="font-semibold text-hadassa-brown">Localização</p>
                    <p className="text-hadassa-brown/70">Imperatriz - MA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-hadassa-beige/20 rounded-full p-3">
                    <Clock className="h-6 w-6 text-hadassa-brown" />
                  </div>
                  <div>
                    <p className="font-semibold text-hadassa-brown">Horário de Atendimento</p>
                    <p className="text-hadassa-brown/70">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-hadassa-brown/70">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Direto WhatsApp */}
            <Card className="border-hadassa-brown bg-hadassa-brown text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Prefere falar diretamente?</h3>
                <p className="mb-4 opacity-90">
                  Clique no botão abaixo para ir direto ao WhatsApp
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/5599984311884", "_blank")}
                  variant="secondary"
                  className="w-full bg-white text-hadassa-brown hover:bg-gray-100"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Política de Privacidade */}
            <Card className="border-hadassa-beige/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-hadassa-brown mb-2">Política de Privacidade</h4>
                <p className="text-sm text-hadassa-brown/70">
                  Suas informações pessoais são tratadas com total confidencialidade e 
                  usadas apenas para fins de agendamento e comunicação sobre nossos serviços. 
                  Não compartilhamos seus dados com terceiros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
