import styled from "styled-components";

const Home = ({name}) => {
    return (
        <Wrapper>
            <Title>
                Hello {name}.  Welcome home.
            </Title>
        </Wrapper>

    )
}

export default Home;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `

const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip`