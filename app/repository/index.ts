import axios from "axios";
import config from "../config";

export const AxiosInstance = axios.create({
  baseURL: config.NEXT_PUBLIC_API_URL,
  // Add any additional configuration options here
});



interface CreateMessage {
  message: string;
  password?: string;
  expirationDate?: string;
}

export class messageRepository {
  static get = async (id: string) => {
    try {
      const response = await AxiosInstance.get(`/messages/${id}`);
      return response;
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  static create = async (data: CreateMessage) => {
    try {
      const response = await AxiosInstance.post("/messages", data);
      return response;
    } catch (error) {
      console.error("Error while creating:", error);
    }
  };

  static count = async () => {
    try {
      const response = await AxiosInstance.get("/messages/count");
      return response;
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };
}
