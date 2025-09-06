"use client";

import { Star } from "lucide-react";
import { AnimatedSection } from "../animated-section";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

const allTestimonials = [
    {
        name: "Laura G.",
        avatar: "LG",
        review: "¡El MacBook Pro que compré está como nuevo! El trato fue excelente y el envío rapidísimo. Totalmente recomendable, ¡calidad y precio inmejorables!",
    },
    {
        name: "Carlos M.",
        avatar: "CM",
        review: "Compré un iPhone 13 y estoy encantado. El equipo funciona a la perfección y me ahorré un buen dinero. El servicio al cliente es de 10.",
    },
    {
        name: "Ana P.",
        avatar: "AP",
        review: "Tenía dudas sobre comprar un Apple Watch reacondicionado, pero en Mac-Out me asesoraron genial. El reloj está impecable. ¡Repetiré seguro!",
    },
    {
        name: "Javier R.",
        avatar: "JR",
        review: "Servicio profesional y transparente. Me enviaron fotos y vídeos del iPad antes de comprarlo. La confianza que transmiten no tiene precio.",
    },
    {
        name: "Sofía L.",
        avatar: "SL",
        review: "Un servicio postventa increíble. Tuve una pequeña duda con la configuración y me ayudaron al instante. Así da gusto comprar.",
    },
    {
        name: "Marcos V.",
        avatar: "MV",
        review: "Les llevé mi Mac para ampliarle el disco duro y ahora vuela. Rápidos, eficientes y a un precio muy competitivo. 100% recomendados.",
    },
    {
        name: "Elena F.",
        avatar: "EF",
        review: "He comprado varios productos para mi familia y todos perfectos. La mejor opción en Sevilla para productos Apple reacondicionados.",
    },
    {
        name: "David S.",
        avatar: "DS",
        review: "Calidad, garantía y un trato cercano. Se nota que les apasiona lo que hacen. No se puede pedir más. ¡Gracias, equipo de Mac-Out!",
    },
];

export function AllTestimonials() {
  return (
    <AnimatedSection id="all-testimonials" className="py-16 sm:py-24">
       <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold my-4">
              La Voz de Nuestros Clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
                Nos enorgullece compartir la experiencia de quienes ya han confiado en nosotros. Su satisfacción es nuestro mayor logro y el motor que nos impulsa a mejorar cada día.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
                <Card className="h-full flex flex-col justify-between p-6 bg-card rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <CardContent className="p-0">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground mb-6 text-base">"{testimonial.review}"</p>
                    </CardContent>
                    <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                            <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                        </div>
                    </div>
                </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
