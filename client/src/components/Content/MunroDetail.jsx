import styled from 'styled-components';
import Button from '../Button/Button';

const MunroDetail = ({ munro, addMunroToHike, showAddToHikeButton=false, toggleFavourite}) => {
    
  const handleAddToHike = () => {
        addMunroToHike(munro)
    }

    const label = munro.favourite
      ? '★' : '☆'

    // TODO change to SVG star or fontawesome


  return (
    <Wrapper>
      <h3>{munro.name}</h3>
      <p>Height: {munro.height} meters</p>
      <p>Near: {munro.near}</p>
      <p>Description: {munro.description}</p>
      <img src={munro.img}/>
      {showAddToHikeButton &&
      <Button onClick={handleAddToHike} label="Add to hike list"/>
      }
      <p>
        <Button onClick={toggleFavourite} label={label}/>
      </p>
    </Wrapper>
  );
};

export default MunroDetail;

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 1em;
  margin-top: 1em;
  color: orange;
  img {
    max-width: 100%;
    height: auto;   
    border: 1px solid #000;  
  }
`;
