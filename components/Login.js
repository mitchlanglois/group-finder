import { Mutation } from 'react-apollo'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { LOGIN_MUTATION } from '../lib/mutations'
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

const Login = ({ classes }) => {
  const email = useFormInput('')
  const password = useFormInput('')

  const submitForm = async (e, login) => {
    e.preventDefault()
    await login()
    resetForm()
  }

  const resetForm = () => {
    email.reset()
    password.reset()
  }

  return (
    <Mutation
      mutation={LOGIN_MUTATION}
      variables={{ email: email.value, password: password.value }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(login, { error, loading }) => {
        return (
          <form method="post" onSubmit={e => submitForm(e, login)}>
            <fieldset disabled={loading} aria-busy={loading} className={classes.fieldset}>
              <Typography variant="h5">
                Log in to an existing account
              </Typography>
              <Error error={error} />
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
              <Button className={classes.submit} color="primary" variant="contained" type="submit">Log in!</Button>
            </fieldset>
          </form>
        )
      }}
    </Mutation>
  )
}

export default withStyles(styles)(Login)
