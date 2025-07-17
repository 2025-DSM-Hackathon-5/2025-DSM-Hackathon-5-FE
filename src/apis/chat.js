import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "./index";

const router = "/chat";

// 채팅 보내기
export const useSendChat = (options) => {
  return useMutation({
    ...options,
    mutationFn: async (messagePayload) => {
      const { data } = await instance.post(`${router}/send`, messagePayload);
      return data;
    },
  });
};

// 답변 받기
export const useGetChatStream = (sessionId, options) => {
  return useQuery({
    queryKey: ["chatStream", sessionId],
    queryFn: async () => {
      const { data } = await instance.get(`${router}/stream/${sessionId}`);
      return data;
    },
    enabled: !!sessionId,
    ...options,
  });
};

// 채팅 내역 조회
export const useGetChatHistory = (options) => {
  return useQuery({
    queryKey: ["chatHistory"],
    queryFn: async () => {
      const { data } = await instance.get(`${router}`);
      return data;
    },
    ...options,
  });
};

// AI 커스터마이징 생성/수정
export const useSaveChatPreset = (options) => {
  return useMutation({
    mutationFn: async (formData) => {
      const { data } = await instance.post("/chat/preset", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
      return data;
    },
    ...options,
  });
};

// AI 커스터마이징 조회
export const useGetChatPreset = (options) => {
  return useQuery({
    queryKey: ["chatPreset"],
    queryFn: async () => {
      const { data } = await instance.get(`${router}/preset`);
      return data;
    },
    ...options,
  });
};
