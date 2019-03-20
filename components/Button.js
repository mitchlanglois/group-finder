import styled from 'styled-components'

const StyledButton = styled.button`
  color: blue;
`;

const Button = (props) => (
  <StyledButton type="button" {...props}>
    {props.children}
  </StyledButton>
)

export default Button
