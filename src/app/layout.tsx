import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Sharma | AI & SaaS Builder",
  description: "Building intelligent products at the intersection of AI and commerce. Portfolio showcasing NorthStar GEO SKU Optimiser and AI CRM Voice Agent.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>P</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-bg-primary text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
