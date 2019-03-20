import styled from 'styled-components'
import SignupForm from '../components/Signup'
import LoginForm from '../components/Login'
import User from '../components/User'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`
export default () => (
  <User>
    {({ data: { me } }) => (
      <Grid>
        {me && (
          <p>{me.name}</p>
        )}
        {!me && (
          <>
            <SignupForm />
            <LoginForm />
          </>
        )}
      </Grid>
    )}
  </User>
)
