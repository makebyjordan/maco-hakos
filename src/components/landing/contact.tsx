"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, text: "Dirección: C. Tecnología, 5, 41015 Sevilla" },
  { icon: Mail, text: "Email: hola@mac-out.es" },
  { icon: Phone, text: "Teléfono: +34 954 123 456" },
];

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "¡Gracias por contactarnos! Te responderemos pronto.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <AnimatedSection id="contacto" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center mb-4">
          ¿Hablamos?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Visítanos en nuestra tienda de Sevilla o envíanos un mensaje. Estaremos encantados de asesorarte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Nombre" required />
            <Input type="email" placeholder="Email" required />
            <Textarea placeholder="Mensaje" rows={5} required />
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white transition-transform hover:scale-105">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
