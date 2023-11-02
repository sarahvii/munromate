import styled from "styled-components";
import Button from "../Button/button";
import MunroSummary from "./MunroSummary";

const MunroItem = ({ munro, onClick, showAddToHikeButton = false, addMunroToHike }) => {

  const handleButtonClick = (event) => {
    event.stopPropagation();
    addMunroToHike(munro);
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
border: 1px solid #ccc;
background: papayawhip;
cursor: pointer;
color: green;
&:hover {
  text-decoration: underline;
}
margin: 1em 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px
`;
