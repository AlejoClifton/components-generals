import "@style/index.css";
import { metadataStatic } from "@/components/seoDynamic/metadata";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = metadataStatic;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
