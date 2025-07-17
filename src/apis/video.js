import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from ".";

const router = "/video";

// 릴스 업로드
export const useUploadVideo = (options) => {
  return useMutation({
    ...options,
    mutationFn: async (formData) => {
      const { data } = await instance.post(`${router}`, formData);
      return data;
    }
  });
};

// 릴스 삭제
export const useDeleteVideo = (options) => {
  return useMutation({
    ...options,
    mutationFn: async (videoId) => {
      const { data } = await instance.delete(`${router}/${videoId}`);
      return data;
    }
  });
};

// 릴스 수정
export const useEditVideo = (options) => {
  return useMutation({
    ...options,
    mutationFn: async ({ videoId, payload }) => {
      const { data } = await instance.patch(`${router}/${videoId}`, payload);
      return data;
    }
  });
};

// 릴스 전체 조회
export const useGetVideos = (options) => {
  return useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data } = await instance.get(`${router}`);
      return data;
    },
    ...options
  });
};

// 내가 올린 릴스 조회
export const useGetMyVideos = (options) => {
  return useQuery({
    queryKey: ["myVideos"],
    queryFn: async () => {
      const { data } = await instance.get(`${router}/my`);
      return data;
    },
    ...options
  });
};

// 좋아요 토글
export const useToggleVideoLike = (options) => {
  return useMutation({
    ...options,
    mutationFn: async (videoId) => {
      const { data } = await instance.put(`${router}/${videoId}`);
      return data;
    }
  });
};
