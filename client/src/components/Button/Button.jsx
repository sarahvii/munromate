import styled from 'styled-components';

const Button = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
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
`;
