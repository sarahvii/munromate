import styled from 'styled-components';
import Button from '../Button/button';

const MunroDetail = ({ munro, addMunroToHike, showAddToHikeButton=false, toggleFavourite}) => {
    
  const handleAddToHike = () => {
        addMunroToHike(munro)
    }

    const label = munro.favourite
      ? '★' : '☆'


  return (
    <Wrapper>
      <h3>{munro.name}</h3>
      <p>Height: {munro.height} meters</p>
      <p>Near: {munro.near}</p>
      <p>Description: {munro.description}</p>
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
  border: 1px solid #ccc;
  padding: 1em;
  margin-top: 1em;
  color: orange
`;
