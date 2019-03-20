import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'

import Logout from './Logout'
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
  margin-bottom: 10px;
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

const MenuItems = styled.div`
  float: right;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #666;
  }
`;

const Header = () => (
  <User>
    {({ data: { me } }) => (
      <HeaderContainer>
        <Logo>
          <Link href="/">
            <a>Group Finder</a>
          </Link>
        </Logo>
        <MenuItems>
          <MenuItem>
            {me &&
              <Logout>
                Logout
            </Logout>
            }
          </MenuItem>
        </MenuItems>
      </HeaderContainer>
    )}
  </User>
)

export default Header
