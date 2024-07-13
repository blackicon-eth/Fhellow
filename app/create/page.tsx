"use client";
import Button from "../lib/components/Button";
import "../globals.css";
import { FhenixClient } from "fhenixjs";
import { BrowserProvider } from "ethers";

// const provider = new BrowserProvider(window.ethereum);
// const client = new FhenixClient({ provider });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black">Hello</div>
    </main>
  );
}
