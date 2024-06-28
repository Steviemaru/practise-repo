import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{height:"30px", background:"red"}}>
          <Link rel="stylesheet" href="/user"> user </Link>
          <Link rel="stylesheet" href="/"> home </Link>
        </div>
        {children}</body>
    </html>
  );
}
