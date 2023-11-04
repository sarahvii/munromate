import styled from 'styled-components';
import Button from '../Button/Button';

const MunroDetail = ({ munro, onAddToHike, showAddToHikeButton=false }) => {
    const handleAddToHike = () => {
        onAddToHike(munro)
    }

  return (
    <Wrapper>
      <h3>{munro.name}</h3>
      <p>Height: {munro.height} meters</p>
      <p>Near: {munro.near}</p>
      <p>Description: {munro.description}</p>
      {showAddToHikeButton &&
      <Button onClick={handleAddToHike} label="Add to hike list"/>
}
    </Wrapper>
  );
};

export default MunroDetail;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  margin-top: 1em;
`;
