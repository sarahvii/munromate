import styled from "styled-components";

const MunroSummary = ({ munro }) => (
  <Details>
    {munro.name} ({munro.height}m) - near {munro.near}
  </Details>
);

const Details = styled.span`
    padding: 1em;
    text-align: center;
    `;

export default MunroSummary;
