import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

import { LOGIN_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'

import Error from './Error'
import Input from './Input'

const Form = styled.form`
  border: 1px solid red;
  padding: 20px;
  fieldset {
    border: none;
  }
  label {
    display: block;
    margin-bottom: 10px;
    input {
      display: block;
    }
  }
`;


const Login = () => {
  const email = useFormInput('')
  const password = useFormInput('')

  const submitForm = async (e, login) => {
    e.preventDefault()
    const response = await login()
    console.log(response)
    email.reset()
    password.reset()
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
              <button type="submit">Login!</button>
              <button type="button" onClick={resetForm}>Reset</button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => setValue(e.target.value)
  const reset = () => setValue(initialValue)

  return {
    value,
    onChange: handleChange,
    reset
  }
}

export default Login
