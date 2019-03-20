import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

const Page = ({ classes, children }) => (
  <>
    <Head>
      <title>Group Finder</title>
    </Head>
    <Grid container spacing={24} className={classes.layout}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  </>
)

export default withStyles(styles)(Page);
