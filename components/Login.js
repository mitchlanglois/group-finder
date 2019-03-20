import { Mutation } from 'react-apollo'

import { LOGIN_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'
import { useFormInput } from '../lib/customHooks'

import Error from './Error'
import Input from './Input'
import Form from './Form'
import Button from './Button'

const Login = () => {
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
          <Form method="post" onSubmit={e => submitForm(e, login)}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Log in to an existing account</h2>
              <Error error={error} />
              <Input type="email" name="email" label="Email" {...email} />
              <Input type="password" name="password" label="Password" {...password} />
              <Button type="submit">Login!</Button>
              <Button onClick={resetForm}>Reset</Button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

export default Login
