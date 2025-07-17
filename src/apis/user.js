import { instance, authInstance } from ".";
import { saveToken } from "./cookie";
import { useMutation, useQuery } from "@tanstack/react-query";

const router = "/user";

export const login = async (formData) => {
  const { data } = await authInstance.post(`${router}/login`, formData);
  saveToken(data.accessToken, data.refreshToken);
};

export const signup = async (formData) => {
  const { data } = await authInstance.post(`${router}/signUp`, formData);
  saveToken(data.accessToken, data.refreshToken);
};

// 유저 정보 수정
export const useChangeUserInfo = (option, formData) => {
  return useMutation({
    ...option,
    mutationFn: async () => {
      const { data } = await instance.patch(`${router}/detail`, formData);
      return data;
    },
  });
};

// 회원 탈퇴
export const useDeleteUser = (option) => {
  return useMutation({
    ...option,
    mutationFn: async () => {
      const { data } = await instance.delete(router);
      return data;
    },
  });
};

// 비밀번호 수정
export const useChangePassword = (option, formData) => {
  return useMutation({
    ...option,
    mutationFn: async () => {
      const { data } = await instance.patch(`${router}/password`, formData);
      return data;
    },
  });
};

// 회원 정보 조회
export const useGetUserInfo = (option) => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const { data } = await instance.get(router);
      return data;
    },
    ...option,
  });
};
