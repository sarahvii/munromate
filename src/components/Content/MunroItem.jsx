import styled from "styled-components";
import Button from "../Button/Button";

const MunroItem = ({ munro, onClick, onAddToHike }) => {
  return (
    <>
    <ListItem onClick={() => onClick(munro)}>
      {munro.name} ({munro.height}m) - near {munro.near}
      <Button onClick={() => onAddToHike(munro)} label="Add to hike list"/>
    </ListItem>
    </>
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
