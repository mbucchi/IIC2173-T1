import * as React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  FormControl,
  Button,
  Input,
  InputLabel,
} from "@material-ui/core"
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles"
import { Send } from "@material-ui/icons"
import Post from "./Post"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { Post as PostData, getPosts, addNewPost } from "../utils/requests"

const styles = createStyles({
  background: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "#212121",
  },
  appbar: { padding: 20, backgroundColor: "#25292E" },
  title: { flexGrow: 1 },
  mainContainer: {
    marginTop: 60,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  inputBar: {
    backgroundColor: "#22262A",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  contentList: { width: "50%", minWidth: 380 },
  textField: { width: "50%", minWidth: 350 },
  sendButton: { margin: -10, padding: 0 },
  post: { paddingLeft: 0, paddingRight: 0 },
})

interface AppProps extends WithStyles<typeof styles> {
  websiteTitle: string
}

@observer
class App extends React.Component<AppProps, {}> {
  @observable
  private posts: PostData[] = []

  @observable
  private inputValue: string = ""

  private loadedAll: boolean = false

  private loading: boolean = false

  componentWillMount() {
    getPosts().then(newPosts => (this.posts = newPosts))
  }

  componentDidMount() {
    document.onscroll = this.appScrolled
  }

  newPost = () => {
    console.log(this.inputValue)
    addNewPost(this.inputValue).then(post => {
      if (post) {
        this.posts.push(post)
        this.inputValue = ""
      } else {
        // TODO
        console.log("error")
      }
    })
  }

  appScrolled = async () => {
    if (!this.loadedAll && !this.loading) {
      this.loading = true

      const html = document.documentElement
      const currBot = html.scrollTop + 1.5 * html.clientHeight
      if (currBot > html.scrollHeight) await this.loadMore()
      this.loading = false
    }
  }

  loadMore = async () => {
    if (this.posts.length == 0) return
    const oldest = this.posts[0]
    console.log(oldest)
    await getPosts(oldest).then(newPosts => {
      if (newPosts.length && newPosts[0].id != oldest.id) {
        newPosts.pop()
        this.posts.unshift(...newPosts)
      } else this.loadedAll = true
    })
  }

  inputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!event.shiftKey && event.keyCode == 13) {
      event.preventDefault()
      this.newPost()
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.background} />
        <AppBar position="fixed" color="default" className={classes.appbar}>
          <Typography
            align="center"
            variant="title"
            color="primary"
            className={classes.title}
          >
            {this.props.websiteTitle}
          </Typography>
        </AppBar>
        <div className={classes.mainContainer}>
          <Toolbar className={classes.inputBar}>
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="textarea">
                What's on your mind, anon?
              </InputLabel>
              <Input
                id="textarea"
                multiline
                value={this.inputValue}
                onKeyDown={this.inputKeyDown}
                onChange={ev => (this.inputValue = ev.target.value)}
                endAdornment={
                  <Button
                    aria-label="send"
                    className={classes.sendButton}
                    type="submit"
                    onClick={this.newPost}
                  >
                    <Send />
                  </Button>
                }
              />
            </FormControl>
          </Toolbar>
          <List className={classes.contentList} onScroll={this.appScrolled}>
            {this.posts.reverse().map(post => (
              <ListItem key={post.id} className={classes.post}>
                <Post content={post.content} timestamp={post.timestamp} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
