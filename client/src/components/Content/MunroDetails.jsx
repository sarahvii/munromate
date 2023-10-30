import styled from "styled-components";

const MunroDetails = ({ munro }) => (
  <Details>
    {munro.name} ({munro.height}m) - near {munro.near}
  </Details>
);

const Details = styled.span`
    padding: 1em;
    text-align: center;
    `;

export default MunroDetails;
