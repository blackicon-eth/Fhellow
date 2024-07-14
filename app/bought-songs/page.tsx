"use client";
import Link from "next/link";

export default function Home() {
  // Mock table elements
  const tableElements = [
    { title: "Come mai", label: "Pop", price: "32", cid: "bafybeiaeax3inmgpavd5x77ckvkhhugei75xwvp7eaily5clzqptalvnfy" },
    {
      title: "Rock me Amadeus",
      label: "Disco/Pop",
      price: "7",
      cid: "bafkreignxgnhx2mrbz3y3ulrp6wfx24yavv2kgfgrz5dcacdeqpibkxj7u",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 w-full max-w-8xl items-start justify-start font-mono text-sm lg:flex">
        <div className="pl-3 pt-5 pb-4 text-black font-semibold text-4xl underline">Owned songs</div>
        <div className="flex flex-col w-full mt-5 items-start text-3xl text-black font-semibold bg-emerald-100 border-black border-2 rounded-lg">
          <div className="flex flex-row justify-between border-b-4 border-black w-full">
            <div className="border-r-2 border-black pl-3 p-4 text-center items-center w-full">Title</div>
            <div className="border-r-2 border-black pl-3 p-4 text-center items-center w-full">Label</div>
            <div className="border-r-2 border-black pl-3 p-4 text-center items-center w-full">Price</div>
            <div className="pl-3 p-4 text-center items-center w-full">CID</div>
          </div>
          {tableElements.map((element, index) => (
            <div className="flex flex-row justify-between border-b-4 border-black w-full" key={index}>
              <div className="text-2xl border-r-2 border-black pl-3 p-4 items-center w-full">{element.title}</div>
              <div className="text-2xl border-r-2 border-black pl-3 p-4 items-center w-full">{element.label}</div>
              <div className="text-2xl border-r-2 border-black pl-3 p-4 items-center w-full">{element.price} $</div>

              <div className="text-2xl pl-3 p-4 items-center w-full underline">
                <Link href={`https://gateway.lighthouse.storage/ipfs/${element.cid}`} target="_blank">
                  {element.cid.slice(0, 14)}...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
