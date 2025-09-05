import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { DashboardProvider } from '@/context/dashboard-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mac-Out Recommerce',
  description: 'Dale una segunda vida a la tecnología. Descubre tu Apple reacondicionado en Mac-Out.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <DashboardProvider>
          {children}
          <Toaster />
        </DashboardProvider>
      </body>
    </html>
  );
}
