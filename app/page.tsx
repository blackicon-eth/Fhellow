"use client";
import axios from "axios";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";
import Button from "./lib/components/Button";

const getFiles = async () => {
  const apikey = await createApiKey();
  const res = await lighthouse.getUploads(apikey.data.apiKey);
  console.log(res);
};

const createApiKey = async () => {
  const signAuthMessage = async (privateKey: string, verificationMessage: string) => {
    const signer = new ethers.Wallet(privateKey);
    const signedMessage = await signer.signMessage(verificationMessage);
    return signedMessage;
  };

  const getApiKey = async () => {
    const wallet = {
      publicKey: "0xf2E19F606a775c02D785d4c2f4b7BCbb2Dfc21F2",
      privateKey: process.env.PRIVATE_KEY!,
    };
    const verificationMessage = (
      await axios.get(`https://api.lighthouse.storage/api/auth/get_message?publicKey=${wallet.publicKey}`)
    ).data;
    const signedMessage = await signAuthMessage(wallet.privateKey, verificationMessage);
    const response = await lighthouse.getApiKey(wallet.publicKey, signedMessage);
    console.log(response);
    return response;
  };

  return await getApiKey();
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={createApiKey}>
          Create API Key
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={getFiles}>
          See files
        </button>
        <Button buttonText="Hello" />
      </div>
    </main>
  );
}
