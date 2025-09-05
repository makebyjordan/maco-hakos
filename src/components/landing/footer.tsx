import { MacOutLogo } from "../icons";
import { Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <MacOutLogo className="h-8 w-8 text-accent" />
          <span className="font-headline text-xl font-semibold">Mac-Out</span>
        </div>
        <div className="flex gap-4 mb-4 sm:mb-0">
          {socialLinks.map((link, index) => (
            <Link href={link.href} key={index} className="text-muted-foreground hover:text-accent transition-colors">
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mac-Out. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
