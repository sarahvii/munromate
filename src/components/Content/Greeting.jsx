import styled from "styled-components";

const Greeting = ({ name }) => (
  <Title>Hello {name}. Welcome home.</Title>
);

export default Greeting;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `