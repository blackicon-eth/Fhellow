import React, { useEffect, useState } from "react";
import Button from "./Button";
import { pinFile } from "../../lib/lighthouse";
import { useSignMessage, useAccount } from "wagmi";
import axios from "axios";

const SingleFileUploader = () => {
  const { signMessage, data, isSuccess } = useSignMessage();
  const account = useAccount();
  const [file, setFile] = useState<File | null>(null);
  const [cid, setCid] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (!(e.target.files[0].type === "audio/mpeg" || e.target.files[0].type === "audio/flac")) {
        alert("Only Music files are supported! (mp3 / flac)");
        return;
      }
      setFile(e.target.files[0]);
    }
  };

  const signIPFSMessage = async () => {
    if (file && account) {
      const verificationMessage = (
        await axios.get(`https://api.lighthouse.storage/api/auth/get_message?publicKey=${account.address}`)
      ).data;
      signMessage({ message: verificationMessage });
    }
  };

  const pinToIPFS = async () => {
    if (file && data && account.address) {
      const cid = await pinFile(file, data, account.address);
      setCid(cid.Hash);
    }
  };

  const WriteOnFhenix = async () => {
    // We will fill this out later
  };

  return (
    <>
      <div>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && (
        <div className="flex flex-row gap-5">
          {!isSuccess ? (
            <Button onClick={signIPFSMessage} rounded="md" buttonText="Sign Message" />
          ) : !cid ? (
            <Button onClick={pinToIPFS} rounded="md" buttonText="Pin to IPFS" />
          ) : (
            <Button onClick={WriteOnFhenix} rounded="md" color="pink" buttonText="Publish Song" />
          )}
        </div>
      )}
    </>
  );
};

export default SingleFileUploader;
