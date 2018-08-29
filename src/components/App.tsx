import * as React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  List,
  ListItem,
  FormControl,
  Button,
  Input,
  InputLabel,
  Icon,
} from "@material-ui/core"
import { WithStyles, createStyles } from "@material-ui/core/styles"
import { Send } from "@material-ui/icons"
import Post from "./Post"

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
})

interface AppProps extends WithStyles<typeof styles> {
  websiteTitle: string
}

class App extends React.Component<AppProps, {}> {
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
            {/* <TextField
                id="textarea"
                label="What's on your mind, anon?"
                multiline
                className={classes.textField}
                margin="normal"
              /> */}
            <FormControl className={classes.textField}>
              <InputLabel htmlFor="textarea">
                What's on your mind, anon?
              </InputLabel>
              <Input
                id="textarea"
                multiline
                endAdornment={
                  <Button aria-label="send" className={classes.sendButton}>
                    <Send />
                  </Button>
                }
              />
            </FormControl>
          </Toolbar>
          <List className={classes.contentList}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <ListItem>
                <Post />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
