import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import { FEED_QUERY } from '../lib/queries'

const styles = theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing.unit * 3
  }
});

const Feed = ({ classes }) => (
  <Query query={FEED_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error: ${error.message}`;

      return (
        <>
          {data.feed.map(post => (
            <Grid key={post.id} item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6">
                  {post.title}
                </Typography>
                <Typography>
                  {post.content}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </>
      )
    }}
  </Query>
)

export default withStyles(styles)(Feed)
