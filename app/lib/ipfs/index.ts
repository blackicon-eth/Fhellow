import fs from "fs";
import path from "path";

// Function to download a file from IPFS and save it to the tmp/ directory
export const downloadFileFromIPFS = async (ipfsHash: string) => {
  const gatewayUrl = `https://gateway.lighthouse.storage/ipfs/${ipfsHash}`;
  fetch(gatewayUrl)
    .then((response) => {
      if (response.ok) return response.arrayBuffer(); // Use arrayBuffer for binary data
      throw new Error("Network response was not ok.");
    })
    .then((arrayBuffer) => {
      const buffer = Buffer.from(arrayBuffer); // Convert arrayBuffer to Buffer
      // Assuming your project's root directory has a 'public' folder
      const dirPath = path.join(__dirname, "..", "tmp"); // Adjust the path as necessary
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true }); // Create the directory if it doesn't exist
      }
      const filePath = path.join(dirPath, ipfsHash);
      fs.writeFile(filePath, buffer, (err) => {
        if (err) {
          console.error("Failed to save the file:", err);
        } else {
          console.log(`File saved to ${filePath}`);
        }
      });
    })
    .catch((error) => {
      console.error("Failed to save the file:", error);
    });
};
