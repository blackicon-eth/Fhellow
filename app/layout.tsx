import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import NeoBrutalistNavbar from "./lib/components/Navbar";
import MusicPlayerFooter from "./lib/components/MusicPlayerFooter";
import { MusicPlayerProvider } from "@/context/musicPlayerContext";

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
          <MusicPlayerProvider>
            <NeoBrutalistNavbar />
            {children}
            <MusicPlayerFooter />
          </MusicPlayerProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
