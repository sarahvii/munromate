import styled from "styled-components";

const NavBar = () => {
    return (
        <Wrapper>
            <Title>
                Munro Mate
            </Title>
        </Wrapper>

    )
}

export default NavBar;

const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #BF4F74;
    `

const Wrapper = styled.section`
    padding: 1em;
    background: black`