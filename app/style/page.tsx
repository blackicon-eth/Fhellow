"use client";
import axios from "axios";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";
import Button from "../../lib/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button buttonText="Medium Rounded Button" rounded="md" color="cyan" />
      </div>
    </main>
  );
}
