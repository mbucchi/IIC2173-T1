import * as firebase from "firebase"
import * as _ from "lodash"

type PostData = {
  id: string
  content: string
  timestamp: number
}

type FirebasePost = {
  ip: string
  content: string
  timestamp: number
}

export function initDB(
  apiKey: string,
  domain: string,
  db_url: string,
  project_id: string,
) {
  const config = {
    apiKey: apiKey,
    authDomain: domain,
    databaseURL: db_url,
    projectId: project_id,
    storageBucket: "",
  }
  return firebase.initializeApp(config)
}

export async function getPosts(
  last_timestamp: number,
): Promise<Array<PostData>> {
  const posts: PostData[] = await firebase
    .database()
    .ref("posts")
    .orderByChild("timestamp")
    .endAt(last_timestamp)
    .limitToLast(20)
    .once("value")
    .then(snapshot => {
      const data = snapshot.val()
      return _.keys(snapshot.val()).map(key => {
        const post: FirebasePost = data[key]
        return {
          id: key,
          content: post.content,
          timestamp: post.timestamp,
        }
      })
    })
  return posts
}

export async function addPost(
  content: string,
  posterIP: string,
): Promise<PostData> {
  const posts_db: firebase.database.Reference = firebase.database().ref("posts")
  const newPost = { content, ip: posterIP, timestamp: Date.now() }
  const newPostId = posts_db.push().key
  const updated = await posts_db
    .update({ [newPostId]: newPost })
    .then(() => true, () => fail)
  if (updated)
    return {
      id: newPostId,
      content: content,
      timestamp: newPost.timestamp,
    }
  return null
}
