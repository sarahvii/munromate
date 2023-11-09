import styled from "styled-components";

const Greeting = ({ name }) => (
  <>
  <Title>Hello {name}!</Title>
  <Para>This site is a work in progress.</Para>
  </>
);

export default Greeting;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `

const Para = styled.p`
    font-size: 1.0em;
    text-align: center;
    color: #000;
`