import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PassKeeper | Keep your passwords save",
  description: "app for keep save your information",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}  bg-black `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
