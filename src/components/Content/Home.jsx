import styled from "styled-components";
import Button from "../Button/button";
import { useState, useEffect } from "react";

const Home = ({name, munros}) => {

    const [randomMunro, setRandomMunro] = useState('')

    useEffect(() => {
        setRandomMunro(randomMunroSelector());
      }, []);

    const randomMunroSelector = () => {
        const randomIndex = Math.floor(Math.random() * munros.length)
        return munros[randomIndex].name
    }

    const handleButtonClick = () => {
        console.log("button clicked")
        setRandomMunro(randomMunroSelector)
    }

    return (
        <Wrapper>
            <Title>Hello {name}. Welcome home.</Title>
            <Paragraph>Is your favourite munro {randomMunro}?
                <p><Button label="No?" onClick={handleButtonClick} /></p>
            </Paragraph>
            {randomMunro && <Paragraph>How about {randomMunro} instead?</Paragraph>} 
        </Wrapper>

    )
}

export default Home;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `
const Paragraph = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `
const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip`