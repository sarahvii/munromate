import styled from 'styled-components';

const MunroDetail = ({ munro }) => {
  return (
    <Wrapper>
      <h3>{munro.name}</h3>
      <p>Height: {munro.height} meters</p>
      <p>Near: {munro.near}</p>
      <p>Description: {munro.description}</p>
    </Wrapper>
  );
};

export default MunroDetail;

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  margin-top: 1em;
`;
