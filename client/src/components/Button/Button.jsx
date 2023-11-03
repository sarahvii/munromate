import styled, { css } from 'styled-components';

const Button = ({ label, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {label}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
    background-color: black;
    border: none;
    color: pink;
    padding: 1px 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
    background-color: orange;
    color: black;
    }

    ${props => props.variant === 'remove' && css`
    background-color: red;
    color: white;

    &:hover {
      background-color: darkred;
      color: white;
    }
  `}
`;
