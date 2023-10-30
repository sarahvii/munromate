import styled from "styled-components";
import Button from "../Button/button";
import { useState, useEffect } from "react";

const RandomMunro = ({ munros }) => {
  const [randomMunro, setRandomMunro] = useState("");

  useEffect(() => {
    setRandomMunro(randomMunroSelector());
  }, []);

  const randomMunroSelector = () => {
    const randomIndex = Math.floor(Math.random() * munros.length);
    return munros[randomIndex].name;
  };

  const handleButtonClick = () => {
    setRandomMunro(randomMunroSelector);
  };

  return (
    <>
      <Paragraph>Is your favourite munro {randomMunro}?
        <ButtonSection>
            <Button label="No?" onClick={handleButtonClick} />
        </ButtonSection>
      </Paragraph>
      {randomMunro && <Paragraph>How about {randomMunro} instead?</Paragraph>}
    </>
  );
};

export default RandomMunro;

const Paragraph = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `
const ButtonSection = styled.div`
    background-color: pink`;
