import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/whatsapp-button";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Blintec Proteção Veicular",
  description: "Toda proteção que precisar para o seu veículo você encontra aqui! Proteção contra furto. Furto/Roubo · Incêndio em caso de colisão · Colisão · Fenômenos da Natureza · Vidros e Periféricos · Carro Reserva · Assistência 24h · Guincho",
  keywords: [
    'Proteção veicular',
    'Proteção veicular sem consulta de CPF',
    'Proteção veicular para carros e motos',
    'Associação de proteção veicular',
    'Blintec',
    'Seguro auto alternativo',
    'Proteção veicular Paranavaí',
    'Proteção veicular Olinda'
  ],
  openGraph: {
    title: "Conheça a Blintec Proteção Veicular",
    description: 'Toda proteção que precisar para o seu veículo você encontra aqui! Proteção contra furto. Furto/Roubo · Incêndio em caso de colisão · Colisão · Fenômenos da Natureza · Vidros e Periféricos · Carro Reserva · Assistência 24h · Guincho',
    type: 'website',
    countryName: 'Brazil',
    locale: 'pt_BR',
    siteName: 'Blintec Proteção Veicular',
    images: [
      {
        type: 'image/png',
        url: '/og-image.png',

      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        notoSans.variable,
      )}
    >
      <meta name="google-site-verification" content="l0JOCBPFZjvQTHW1d9KSDoUhebeiI4ADFtABEFelR-k" />
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
