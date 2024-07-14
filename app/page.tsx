"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full pt-10 max-w-5xl text-4xl items-center justify-center text-center font-bold font-mono">
        <img src="https://cdn-icons-png.flaticon.com/512/9448/9448086.png" height={100} width={100} className="pb-10 pt-1" />
        FHELLOW
        <div className="text-xl font-sans pt-10">
          Welcome to Fhellow, a decentralized marketplace to sell and buy music in a completely anonymous way thanks to the
          fully homomorphic encryption (FHE).
        </div>
      </div>
    </main>
  );
}
