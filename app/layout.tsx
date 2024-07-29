
import { Inter } from "next/font/google";
import "./globals.css";
// import Head from "next/head";
import SearchIcon from "../public/searchIcon.svg";
import HalfCircle from "../public/halfCircle.svg";
import StoreProvider from "./StoreProvider";
import NavButtons from "./components/NavButtons";
import CurrencyList from "./components/CurrencyList";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

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
        <StoreProvider>
          <div className="flex px-10  justify-between bg-red-600">
            <div className="flex items-center">
              <NavButtons />
            </div>
            <div className="flex items-center gap-6 border-1">
              <div className="flex items-center rounded-t-xl rounded-b-xl bg-slate-700  ">
                <SearchIcon className="h-7 w-7 mx-2" />
                <input
                  className=" py-2 m-1 bg-slate-700 text-white"
                  placeholder="Search..."
                  type="text"
                />
              </div>
              <div className="py-2 m-1 rounded-t-xl rounded-b-xl bg-slate-700">
              <CurrencyList />
              </div>
              <div className="rounded-t-xl rounded-b-xl bg-slate-700">
              <HalfCircle className=" py-0 m-2.5 bg-slate-700 text-white h-7 w-7" /> 
              </div>
            </div>
          </div>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
