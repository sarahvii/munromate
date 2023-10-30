import styled from 'styled-components';
import Button from '../Button/button';

const MunroDetail = ({ munro, onAddToHike }) => {
    const handleAddToHike = () => {
        onAddToHike(munro)
    }


  return (
    <Wrapper>
      <h3>{munro.name}</h3>
      <p>Height: {munro.height} meters</p>
      <p>Near: {munro.near}</p>
      <p>Description: {munro.description}</p>
      <Button onClick={handleAddToHike} label="Add to hike list"/>
    </Wrapper>
  );
};

export default MunroDetail;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  margin-top: 1em;
`;
