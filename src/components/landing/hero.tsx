import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { AnimatedSection } from "../animated-section";

export function Hero() {
  return (
    <AnimatedSection id="inicio" className="relative bg-card overflow-hidden">
        <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Dale una segunda vida a la tecnología.
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] mt-2">
                            Descubre tu Apple reacondicionado.
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                        Equipos 100% verificados, con garantía y al mejor precio. Directamente desde el corazón de Sevilla.
                    </p>
                    <div className="mt-10">
                        <Button asChild size="lg" className="bg-gradient-to-r from-accent to-[hsl(var(--custom-yellow))] text-white shadow-lg transition-transform hover:scale-105">
                            <Link href="#productos">
                                Ver Productos Disponibles
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                    <Image
                      src="https://picsum.photos/800/600"
                      alt="Colección de productos Apple reacondicionados"
                      width={800}
                      height={600}
                      data-ai-hint="apple products"
                      priority
                      className="rounded-lg shadow-2xl object-cover aspect-[4/3]"
                    />
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
}
