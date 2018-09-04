import axios, { AxiosResponse } from "axios"

export type Post = {
  id: string
  content: string
  timestamp: number
}

export const getPosts = async (lastPost?: Post): Promise<Post[]> => {
  const res: AxiosResponse<Post[]> = await axios.get("/posts", {
    params: {
      last_timestamp:
        (lastPost && lastPost.timestamp) || Number.MAX_SAFE_INTEGER,
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
