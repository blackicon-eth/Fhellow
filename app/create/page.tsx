"use client";
import { useMusicPlayer } from "@/context/musicPlayerContext";
import "../globals.css";
import Button from "../lib/components/Button";
import Input from "../lib/components/Input";
import SingleFileUploader from "../lib/components/SingleFileUploader";
import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  // Setting the states for the form
  const [songTitle, setSongTitle] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("");

  const { changeTrack } = useMusicPlayer();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full px-10 pb-10 pt-7 m-5 max-w-5xl gap-5 items-start text-3xl text-black font-semibold bg-emerald-100 border-black border-2 rounded-lg">
        <div className="pb-5 underline">Create new content</div>
        {/* First batch */}
        <div className="flex flex-row justify-start gap-14">
          <div className="flex flex-col gap-2 text-2xl justify-start">
            <p>Song title</p>
            <Input type="text" placeholder="Fly me to the moon" rounded="md" value={songTitle} onChange={setSongTitle} />
          </div>
          <div className="flex flex-col gap-2 text-2xl justify-start">
            <p>Label</p>
            <Input type="text" placeholder="rock, jazz, pop..." rounded="md" value={label} onChange={setLabel} />
          </div>
        </div>

        {/* Second batch */}
        <div className="flex flex-row justify-start gap-14">
          <div className="flex flex-col gap-2 text-2xl justify-start">
            <p>Price $</p>
            <div className="max-w-32">
              <Input type="number" rounded="md" value={price} onChange={setPrice} />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-2xl justify-start">
            <p># Copies</p>{" "}
            <div className="max-w-32">
              <Input type="number" rounded="md" value={copies} onChange={setCopies} />
            </div>
          </div>
        </div>

        {/* <Button
          buttonText="test change track"
          onClick={() => {
            changeTrack(
              "https://gateway.lighthouse.storage/ipfs/bafybeiaeax3inmgpavd5x77ckvkhhugei75xwvp7eaily5clzqptalvnfy"
            );
          }}
        /> */}

        {/* <Button
          buttonText="Decrypt File"
          onClick={async () => {
            // Download the track from IPFS
            const cid = "Qm";
            await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/get-enc-file`, {
              params: { cid: cid },
            });
            // downloadFileFromIPFS(ipfsHash)
            //   .then((filePath) => console.log(`File downloaded to: ${filePath}`))
            //   .catch((error) => console.error(`Error downloading file: ${error.message}`));
            // Decrypt the file
            // Set the track in the player
          }}
        /> */}

        <div className="flex flex-col gap-3 pt-5 text-xl justify-start">
          <SingleFileUploader copies={copies} songTitle={songTitle} price={price} label={label} />
        </div>
      </div>
    </main>
  );
}
