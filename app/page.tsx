"use client";
import { createApiKey, getFiles } from "./lib/lighthouse";

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
        <button className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
          Medium Rounded Button
        </button>
      </div>
    </main>
  );
}
