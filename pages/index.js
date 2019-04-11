import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import SignupForm from '../components/Signup'
import LoginForm from '../components/Login'
import PostForm from '../components/PostForm'
import User from '../components/User'
import Feed from '../components/Feed'

const styles = theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing.unit * 3
  }
});

const Index = ({ classes }) => (
  <User>
    {({ data: { me } }) => (
      <>
        {me && (
          <Grid container spacing={24} alignItems="flex-start">
            <Grid item xs={12} sm={4}>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="h6">{me.name}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Paper className={classes.paper}>
                    <PostForm></PostForm>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={24}>
                <Feed></Feed>
              </Grid>
            </Grid>
          </Grid>
        )}
        {!me && (
          <Grid container spacing={24} alignItems="stretch">
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <SignupForm />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <LoginForm />
              </Paper>
            </Grid>
          </Grid>
        )}
      </>
    )}
  </User>
)

export default withStyles(styles)(Index)
