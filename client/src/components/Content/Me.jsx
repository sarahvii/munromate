import styled from "styled-components";
import poonhill from '../../assets/poonhill.jpeg'

const Me = () => (
  <>
  <StyledImage src={poonhill} alt="Me up a big hill (not a munro)"/>
  <Para>{`In the meantime, here's me up a big hill (not a munro).`}</Para>
  </>
);

export default Me;

const StyledImage = styled.img`
  display: block; 
  margin: 0 auto; 
  max-width: 30%;
  height: auto;
`;

const Para = styled.p`
    font-size: 1.0em;
    text-align: center;
    color: #000;
`