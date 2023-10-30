import styled from "styled-components";

const Munro = ({ munro }) => {
    return (
        <ListItem>
        {munro.name} 
        ({munro.height}m)
         - near {munro.near}
        </ListItem>
    )
}

export default Munro;

const ListItem = styled.li`
  margin: 1em 0;
`;