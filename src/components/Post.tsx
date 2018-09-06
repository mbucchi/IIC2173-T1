import * as React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"
import { WithStyles, createStyles, withStyles } from "@material-ui/core/styles"
import * as moment from "moment"

const styles = createStyles({
  card: { flexGrow: 1 },
  content: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
  },
  date: { alignSelf: "flex-end" },
})

interface PostProps extends WithStyles<typeof styles> {
  date: Date
  content: string
}

class Post extends React.Component<PostProps, {}> {
  render() {
    const { classes } = this.props
    return (
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="body1">
            {this.props.content.split("\n").map((line, key) => {
              return (
                <React.Fragment key={key}>
                  {line}
                  <br />
                </React.Fragment>
              )
            })}
          </Typography>
          <br />
          <Typography className={classes.date} variant="caption">
            Posted by Anon on {moment(this.props.date).format("LLL")}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Post)
