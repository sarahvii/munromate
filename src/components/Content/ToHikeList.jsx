import styled from "styled-components";

const ToHikeList = ({munros}) => {
    return (
        <Wrapper>
        <Title>Munros I want to hike</Title>
            <List>
            {munros.map(munro => (
                <ListItem key={munro.id}>
                {munro.name} ({munro.height}m) - near {munro.near}
                </ListItem>
            ))}
            </List>
      </Wrapper>

    )
}

export default ToHikeList

const Wrapper = styled.div`
  padding: 1em;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 1em 0;
`;

