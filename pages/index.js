import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SignupForm from '../components/Signup'
import LoginForm from '../components/Login'
import User from '../components/User'

const styles = theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing.unit * 3
  }
});

const Index = ({ classes }) => (
  <User>
    {({ data: { me } }) => (
      <Grid container spacing={24} alignItems="stretch">
        {me && (
          <>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <p>{me.name}</p>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <p>{me.name}</p>
              </Paper>
            </Grid>
          </>
        )}
        {!me && (
          <>
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
          </>
        )}
      </Grid>
    )}
  </User>
)

export default withStyles(styles)(Index)
