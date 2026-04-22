import type { Metadata } from "next";
import { Press_Start_2P, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const pressStart = Press_Start_2P({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-heading" 
});

const ibmPlex = IBM_Plex_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Anuradha Sharma | Full-Stack Dev",
  description: "Roblox-themed  portfolio of Anuradha Sharma",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pressStart.variable} ${ibmPlex.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

