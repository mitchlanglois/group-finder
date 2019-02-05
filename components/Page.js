import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  darkGrey: '#333',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const GlobalStyling = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: Arial;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = (props) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyling />
      <Meta />
      <Inner>
        <Header />
        {props.children}
      </Inner>
    </StyledPage>
  </ThemeProvider>
)

export default Page;
