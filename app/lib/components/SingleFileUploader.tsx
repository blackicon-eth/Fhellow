import React, { useState } from "react";
import Button from "./Button";

const SingleFileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (!(e.target.files[0].type === "audio/mpeg" || e.target.files[0].type === "audio/flac")) {
        alert("Only Music files are supported! (mpe3 / flac)");
        return;
      }
      setFile(e.target.files[0]);
    }
  };

  const pinOnFilecoin = async () => {
    // We will fill this out later
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
          <Button onClick={pinOnFilecoin} rounded="md" buttonText="Pin to IPFS" />
          <Button onClick={WriteOnFhenix} rounded="md" buttonText="Publish Song" />
        </div>
      )}
    </>
  );
};

export default SingleFileUploader;
