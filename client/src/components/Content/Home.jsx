import styled from "styled-components";
import Greeting from "./Greeting";
import RandomMunro from "./RandomMunro";

const Home = ({name, munros}) => {

    return (
        <Wrapper>
            <Greeting name={name}/>
            <RandomMunro munros={munros}/>
        </Wrapper>
    )
}

// hike to the moon

export default Home;

const Wrapper = styled.div`
    padding: 1em;
    background: papayawhip`