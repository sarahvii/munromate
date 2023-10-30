import styled from "styled-components";
import Button from "../Button/button";
import MunroSummary from "./MunroSummary";

const MunroItem = ({ munro, onClick, onAddToHike, showAddToHikeButton = false }) => {

  const handleButtonClick = (event) => {
    event.stopPropagation();
    onAddToHike(munro);
  };

  return (
    <>
    <ListItem onClick={() => onClick(munro)}>
      <MunroSummary munro={munro} />
      {showAddToHikeButton && <Button onClick={handleButtonClick} label="Add to hike list" />}
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
