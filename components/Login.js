import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

import { LOGIN_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'

import Error from '../components/Error'

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

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitForm = async (e, login) => {
    e.preventDefault()
    const response = await login()
    console.log(response)
    this.setState({
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { error, loading }) => {
          return (
            <Form method="post" onSubmit={e => this.submitForm(e, login)}>
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Log in to an existing account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
                </label>
                <label htmlFor="password">
                  Password
                  <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
                </label>
                <button type="submit">Login!</button>
              </fieldset>
            </Form>
          )
        }}
      </Mutation>
    )
  }
}

export default Login
