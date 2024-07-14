import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { defineChain } from "viem/utils";

const tfhe = /*#PURE*/ defineChain({
  id: 8008135,
  name: "tFHE",
  nativeCurrency: {
    name: "Fhenix Testnet",
    symbol: "tFHE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://api.helium.fhenix.zone"],
    },
  },
  blockExplorers: {
    default: {
      name: "tFhenix Blockscout",
      url: "https://explorer.helium.fhenix.zone",
    },
  },
  testnet: true,
});

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Fhellow",
  description: "Fhellow",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
const chains = [tfhe] as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
