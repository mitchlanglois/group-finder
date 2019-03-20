import Router from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Logout from './Logout'
import User from './User'

const styles = (theme) => ({
  title: {
    flexGrow: 1
  }
})

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Header = ({ classes }) => (
  <User>
    {({ data: { me } }) => (
      <AppBar position="sticky">
        <Toolbar>
          <Typography color="inherit" variant="h5" className={classes.title}>
            Group Finder
          </Typography>
          {me &&
            <Button color="inherit" variant="outlined">
              <Logout>
                Logout
            </Logout>
            </Button>
          }
        </Toolbar>
      </AppBar>
    )}
  </User>
)

export default withStyles(styles)(Header)
