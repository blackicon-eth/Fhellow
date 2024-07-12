import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import NeoBrutalistNavbar from "./lib/components/Navbar";

export const metadata: Metadata = {
  title: "Fhellow",
  description: "A fully homomorphic encrypted web3 music marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>
          <NeoBrutalistNavbar />
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
