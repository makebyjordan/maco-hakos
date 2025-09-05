import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint="apple product"
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Badge className="bg-[hsl(var(--custom-green))] hover:bg-[hsl(var(--custom-green))] text-white">
          Reacondicionado y Verificado
        </Badge>
      </CardFooter>
    </Card>
  );
}
