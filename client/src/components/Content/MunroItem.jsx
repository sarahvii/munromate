import styled from "styled-components";
import Button from "../Button/button";
import MunroDetails from "./MunroDetails";

const MunroItem = ({ munro, onClick, onAddToHike }) => {

  const handleButtonClick = (event) => {
    event.stopPropagation();
    onAddToHike(munro);
  };

  return (
    <>
    <ListItem onClick={() => onClick(munro)}>
      <MunroDetails munro={munro} />
      <Button onClick={handleButtonClick} label="Add to hike list" />
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
display: flex;
justify-content: space-between;
align-items: center;
`;
