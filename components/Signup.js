import { Mutation } from 'react-apollo'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { SIGNUP_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'
import { useFormInput } from '../lib/customHooks'

import Error from './Error'

const styles = (theme) => ({
  fieldset: {
    border: 'none'
  },
  input: {
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
})

const Signup = ({ classes }) => {
  const email = useFormInput('')
  const name = useFormInput('')
  const password = useFormInput('')

  const submitForm = async (e, signup) => {
    e.preventDefault()
    await signup()
    resetForm()
  }
  const resetForm = () => {
    email.reset()
    name.reset()
    password.reset()
  }

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={{ email: email.value, name: name.value, password: password.value }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(signup, { error, loading }) => {
        return (
          <form method="post" onSubmit={e => submitForm(e, signup)}>
            <fieldset disabled={loading} aria-busy={loading} className={classes.fieldset}>
              <Typography variant="h5">
                Sign up
              </Typography>
              <Error error={error} />
              <TextField
                fullWidth
                required
                className={classes.input}
                id="name"
                label="Name"
                value={name.value}
                onChange={name.onChange}
                margin="normal"
              />
              <TextField
                fullWidth
                required
                className={classes.input}
                id="email"
                label="Email"
                type="email"
                value={email.value}
                onChange={email.onChange}
                margin="normal"
              />
              <TextField
                fullWidth
                required
                className={classes.input}
                id="password"
                label="Password"
                type="password"
                value={password.value}
                onChange={password.onChange}
                margin="normal"
              />
              <Button className={classes.submit} color="primary" variant="contained" type="submit">Sign Up!</Button>
            </fieldset>
          </form>
        )
      }}
    </Mutation>
  )
}

export default withStyles(styles)(Signup)
