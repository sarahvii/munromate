import styled from "styled-components";

const MunroList = ({munros}) => {
    return (
        <Wrapper>
            <Paragraph>
                One munro is {munros[0].name} which is near {munros[0].near}
            </Paragraph>
            <Paragraph>
                Another is {munros[1].name} which is {munros[1].height}m high.
            </Paragraph>
        </Wrapper>

    )
}

// random munro

export default MunroList;

const Paragraph = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `

const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip`