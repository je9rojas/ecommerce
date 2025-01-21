// Importación de las fuentes de Google
import { Geist, Geist_Mono } from "next/font/google";

// Importación de estilos globales
import "./globals.css";

// Importación del SessionProvider de NextAuth
// El SessionProvider es necesario para manejar el estado de autenticación en toda la aplicación
import { SessionProvider } from "next-auth/react";

// Definición de las fuentes personalizadas con sus respectivas variables CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata del documento (título y descripción)
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Componente de Layout raíz
// Este componente envuelve toda la aplicación y aplica configuraciones globales
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Proveedor de sesión para manejar autenticación global */}
        <SessionProvider>
          {/* Renderización del contenido hijo (componentes de las páginas) */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
