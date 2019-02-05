import Link from 'next/link'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.darkGrey};
  a {
    text-decoration: none;
    color: ${props => props.theme.darkGrey};
  }
`;

const Logo = styled.span`
  font-size: 2rem;
  margin-right: 16px;
  a {
    color: ${props => props.theme.darkGrey};
    text-transform: uppercase;
    text-decoration: none;
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
  </HeaderContainer>
)

export default Header
