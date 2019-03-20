import { Mutation } from 'react-apollo'

import { SIGNUP_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'
import { useFormInput } from '../lib/customHooks'

import Error from './Error'
import Input from './Input'
import Form from './Form'
import Button from './Button'

const Signup = () => {
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
          <Form method="post" onSubmit={e => submitForm(e, signup)}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Log in to an existing account</h2>
              <Error error={error} />
              <Input type="email" name="email" label="Email" {...email} />
              <Input type="text" name="name" label="Name" {...name} />
              <Input type="password" name="password" label="Password" {...password} />
              <Button type="submit">Sign Up!</Button>
              <Button onClick={resetForm}>Reset</Button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

export default Signup
