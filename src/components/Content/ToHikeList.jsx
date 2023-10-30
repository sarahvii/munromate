import styled from "styled-components";

const ToHikeList = (munros) => {
    return (
        <Title>
            Munros I want to hike
        </Title>
    )
}

export default ToHikeList

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