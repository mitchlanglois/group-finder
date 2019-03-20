import { Mutation } from 'react-apollo'

import { LOGOUT_MUTATION } from '../lib/mutations'
import { CURRENT_USER_QUERY } from '../lib/queries'

const Logout = (props) => (
  <Mutation mutation={LOGOUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]} >
    {logout => <span onClick={logout}>{props.children}</span>}
  </Mutation >
)

export default Logout
