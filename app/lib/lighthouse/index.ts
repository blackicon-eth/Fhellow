import lighthouse from "@lighthouse-web3/sdk";

export const getFiles = async (signedMessage: string, address: string) => {
  const apikey = await createApiKey(signedMessage, address);
  const res = await lighthouse.getUploads(apikey.data.apiKey);
  console.log(res);
};

export const pinFile = async (file: File, signedMessage: string, address: string): Promise<any> => {
  const apiKey = await createApiKey(signedMessage, address);
  const uploadResponse = await lighthouse.uploadBuffer(file, apiKey.data.apiKey);
  console.log(uploadResponse.data);
  return uploadResponse.data;
};

export const createApiKey = async (signedMessage: string, address: string) => {
  const response = await lighthouse.getApiKey(address, signedMessage);
  return response;
};
