import axios from "axios";

interface RestClient {
  url: string;
  params?: object;
  method: string;
  baseURL?: string;
  headers?: {
    "content-type"?: "application/json";
    Authorization?: string;
  };
  data?: object;
}

export const callEndPoint = async (clientData: RestClient) => {
  return await axios(clientData);
};
