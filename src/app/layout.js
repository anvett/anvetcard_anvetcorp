
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada sin viewport
export const metadata = {
  title: "Anvetcorp SAS Digital Card",
  description: "Tarjeta de presentación digital de Informática & Tecnología Anvetcorp SAS", 
  keywords: "Anvetcorp, Informática, Tecnología, soporte técnico, computadoras, desarrollo web",
  authors: [{ name: "Anvetcorp" }],
  robots: "index, follow",
  
  openGraph: {
    title: "Anvetcorp SAS Digital Card",
    description: "Digital Card de Informática & Tecnología Anvetcorp SAS",
    url: "https://anvetcorp.anvetcard.com",
    images: [
      {
        url: "https://anvetcorp.anvetcard.com/assets/images/sharedimage.png",
        alt: "Anvetcorp Logo",
        width: 1200, // Ajuste de tamaño recomendado para OpenGraph
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informática & Tecnología Anvetcorp SAS",
    description: "Digital Card de Informática & Tecnología Anvetcorp SAS",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

// Nueva exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-image-with-overlay">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
