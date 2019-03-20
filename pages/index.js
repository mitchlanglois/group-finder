import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SignupForm from '../components/Signup'
import LoginForm from '../components/Login'
import User from '../components/User'

const styles = theme => ({
  gridItem: {
    height: '100%'
  },
});

const Index = ({ classes }) => (
  <User>
    {({ data: { me } }) => (
      <Grid container spacing={24} alignItems="stretch">
        {me && (
          <p>{me.name}</p>
        )}
        {!me && (
          <>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.gridItem}>
                <SignupForm />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.gridItem}>
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
