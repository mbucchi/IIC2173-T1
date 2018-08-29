import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  withStyles,
  Paper,
  Typography,
} from "@material-ui/core"
import { WithStyles, createStyles } from "@material-ui/core/styles"

const styles = createStyles({
  card: {},
  content: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
  },
  date: { alignSelf: "flex-end" },
})

interface PostProps extends WithStyles<typeof styles> {
  // date: string
}

class Post extends React.Component<PostProps, {}> {
  render() {
    const { classes } = this.props
    return (
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            inventore aliquam rem officia vero repudiandae sunt! Quas
            necessitatibus architecto maxime eos inventore accusamus obcaecati,
            itaque dignissimos, officiis, neque a modi.
          </Typography>
          <br />
          <Typography className={classes.date} variant="caption">
            18:32:23 September 10, 2018 by Anon
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Post)
