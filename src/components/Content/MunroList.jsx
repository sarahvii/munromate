import styled from "styled-components";

const MunroList = ({munros}) => {
    return (
        <Wrapper>
        <Title>Munro List</Title>
            <List>
            {munros.map((munro, index) => (
                <ListItem key={index}>{munro.name} ({munro.height}m) - near {munro.near}</ListItem>
            ))}
        </List>
      </Wrapper>

    )
}

export default MunroList;

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