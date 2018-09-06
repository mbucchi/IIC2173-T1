import axios, { AxiosResponse } from "axios"

export type Post = {
  id: string
  content: string
  date: Date
}

export const getPosts = async (lastPost?: Post): Promise<Post[]> => {
  const res: AxiosResponse<Post[]> = await axios.get("/posts", {
    params: {
      last_id: (lastPost && lastPost.id) || Number.MAX_SAFE_INTEGER,
    },
  })
  if (res.status != 200) {
    console.error("Server error: Can't fetch posts")
    return []
  }
  return res.data
}

export const addNewPost = async (content: string): Promise<Post> => {
  const res: AxiosResponse<Post> = await axios.post("/posts", {
    content: content.trim(),
  })
  if (res.status != 201) {
    return null
  }
  return res.data
}
