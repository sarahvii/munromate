import styled from "styled-components";
import Greeting from "./Greeting";
import RandomMunro from "./RandomMunro";

const Home = ({name, munros}) => {

    return (
        <MainContent>
        <Wrapper>
            <Greeting name={name}/>
            <RandomMunro munros={munros}/>
        </Wrapper>
        </MainContent>
    )
}

// hike to the moon

export default Home;

const MainContent = styled.div`
    padding-top: 60px;`

const Wrapper = styled.div`
    padding: 1em;
    background: papayawhip`