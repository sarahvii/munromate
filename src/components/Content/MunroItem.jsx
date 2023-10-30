import styled from "styled-components";

const MunroItem = ({ munro, onClick }) => {
  return (
    <ListItem onClick={() => onClick(munro)}>
      {munro.name} ({munro.height}m) - near {munro.near}
    </ListItem>
  );
};

export default MunroItem;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  margin: 1em 0;
`;
