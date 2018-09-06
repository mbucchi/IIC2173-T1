import * as mysql from "mysql"

type PostData = {
  id: number
  content: string
  date: Date
}

export class Database {
  private connection: mysql.Connection

  constructor(host: string, user: string, password: string, database: string) {
    this.connection = mysql.createConnection({
      host,
      user,
      password,
      database,
    })
  }

  public getPosts = async (last_id: number): Promise<PostData[]> => {
    return new Promise<PostData[]>((resolve, reject) =>
      this.connection.query(
        `SELECT ID as id, content, timestamp as date 
         FROM post 
         WHERE id < ?
         ORDER BY id DESC
         LIMIT 20`,
        last_id,
        (err, results) => {
          if (err) reject(err)
          else resolve(results)
        },
      ),
    )
  }
  public addPost = async (
    content: string,
    poster_ip: string,
  ): Promise<PostData> => {
    return new Promise<PostData>((resolve, reject) =>
      this.connection.query(
        "INSERT INTO post SET ?",
        { content, poster_ip },
        (err, results) => {
          if (err) reject(err)
          else
            this.connection.query(
              "SELECT ID as id, content, timestamp as date FROM post WHERE id = ?",
              results.insertId,
              (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
              },
            )
        },
      ),
    )
  }
}
