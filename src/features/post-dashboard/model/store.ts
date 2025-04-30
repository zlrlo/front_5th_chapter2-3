import { create } from "zustand"

type PostDashboardState = {
  posts: any[]
  setPosts: (posts: any[]) => void
}

export const usePostDashboardStore = create<PostDashboardState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}))
