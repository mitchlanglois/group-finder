import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import styled from 'styled-components'

import { SIGNUP_MUTATION } from '../lib/mutations'
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

class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  }
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitForm = async (e, signup) => {
    e.preventDefault()
    const response = await signup()
    console.log(response)
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          return (
            <Form method="post" onSubmit={e => this.submitForm(e, signup)}>
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign up for an account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.saveToState} />
                </label>
                <label htmlFor="name">
                  Name
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.saveToState} />
                </label>
                <label htmlFor="password">
                  Password
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.saveToState} />
                </label>
                <button type="submit">Sign Up!</button>
              </fieldset>
            </Form>
          )
        }}
      </Mutation>
    )
  }
}

export default Signup
