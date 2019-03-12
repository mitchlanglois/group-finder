import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'

import User from './User'

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.darkGrey};
  a {
    text-decoration: none;
    color: ${props => props.theme.darkGrey};
    text-transform: uppercase;
    text-decoration: none;
    padding: 0px 5px;
  }
`;

const Logo = styled.span`
  font-size: 2rem;
  margin-right: 16px;
  a {
    padding: 0;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>
      <Link href="/">
        <a>Group Finder</a>
      </Link>
    </Logo>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <User>
      {({ data: { me } }) => {
        if (me) return <p>{me.name}</p>
        return null
      }}
    </User>
  </HeaderContainer>
)

export default Header
