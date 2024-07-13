export const generateEncryptedArrayBuffer = async (
  file: File,
  password: string
): Promise<{ encryptedArrayBuffer: ArrayBuffer }> => {
  const algorithm = {
    name: "AES-GCM",
    length: 256,
  };
  const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), { name: "PBKDF2" }, false, [
    "deriveKey",
  ]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    algorithm,
    false,
    ["encrypt"]
  );

  const fileBuffer = await file.arrayBuffer();
  const encryptedArrayBuffer = await crypto.subtle.encrypt({ ...algorithm }, key, fileBuffer);

  return { encryptedArrayBuffer };
};

export const decryptFile = async (encrypted: any, password: any): Promise<ArrayBuffer> => {
  const algorithm = {
    name: "AES-GCM",
    length: 256,
  };
  const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), { name: "PBKDF2" }, false, [
    "deriveKey",
  ]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    algorithm,
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt({ ...algorithm }, key, encrypted);
  return decrypted; // ArrayBuffer of decrypted data
};

export const generateEncryptedFile = async (encryptedData: { encryptedArrayBuffer: ArrayBuffer }): Promise<File> => {
  const blob = new Blob([encryptedData.encryptedArrayBuffer], { type: "application/octet-stream" });
  const file = new File([blob], "encryptedFile.enc", { type: "application/octet-stream" });
  return file;
};
