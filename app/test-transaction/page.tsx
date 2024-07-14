"use client";
import { FhenixClient, SupportedProvider } from "fhenixjs";
import { getAddress, ethers, JsonRpcProvider } from "ethers";
import { fhellow_abi, fhellow_address } from "../lib/abi/fhellow_abi";
import { EncryptionTypes, EncryptedUint32, EncryptedUint256, EncryptedUint8, getPermit } from "fhenixjs";
import { useAccount } from "wagmi";
import { getAccount } from "wagmi/actions";
import { writeContract } from "@wagmi/core";
import { config } from "@/config";

// Initialize the provider and client
const provider = new JsonRpcProvider("https://api.helium.fhenix.zone");
const client = new FhenixClient({ provider: provider as SupportedProvider });

export default function Home() {
  const account = useAccount();

  //Initialize the signer and contract
  let signer: any;
  let fhellowContract: ethers.Contract;

  async function initialize() {
    signer = account;
    fhellowContract = new ethers.Contract(getAddress(fhellow_address), fhellow_abi, signer);
  }

  async function createItem(key: number, maxSupply: number, price: number, CID: string, title: string, label: string) {
    try {
      // Make sure initialize() has completed
      await initialize();

      const decryptionKey: EncryptedUint256 = await client.encrypt(key, EncryptionTypes.uint256);
      const eMaxSupply: EncryptedUint32 = await client.encrypt(maxSupply, EncryptionTypes.uint32);

      // const result = await writeContract(config, {
      //   abi: fhellow_abi,
      //   address: fhellow_address,
      //   functionName: "createId",
      //   args: [
      //     { data: `0x${decryptionKey.toString()}` },
      //     { data: `0x${eMaxSupply.toString()}` },
      //     BigInt(price),
      //     CID,
      //     title,
      //     label,
      //   ],
      //   connector,
      // });

      const tx = await fhellowContract.createId(decryptionKey, eMaxSupply, price, CID, title, label);
      await tx.wait(); // Wait for the transaction to be mined
      //console.log("Transaction successful:", tx);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button
          onClick={() =>
            createItem(123456789, 123, 12, "bafybeiaeax3inmgpavd5x77ckvkhhugei75xwvp7eaily5clzqptalvnfy", "title", "label")
          }
          className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        >
          Test transaction
        </button>
      </div>
    </main>
  );
}
