import { authInstance } from ".";
import { saveToken } from "./cookie";

const router = "/user";

export const login = async (formData) => {
  const { data } = await authInstance.post(`${router}/login`, formData);
  saveToken(data.accessToken, data.refreshToken);
};

export const signup = async (formData) => {
  const { data } = await authInstance.post(`${router}/signup`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  saveToken(data.accessToken, data.refreshToken);
};
