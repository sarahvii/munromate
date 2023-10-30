import { useState } from "react";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import Button from "../Button/button";

const ToHikeList = ({munros, onAddToHike}) => {
    const [selectedMunro, setSelectedMunro] = useState(null)

    const handleMunroClick = (munro) => {
        setSelectedMunro(munro)
    }


    return (
        <Wrapper>
        <Title>Munros I want to hike</Title>
            <List>
            {munros.map(munro => (
                <ListItem key={munro.id} onClick={() => handleMunroClick(munro)}>
                {munro.name} ({munro.height}m) - near {munro.near}
                <Button onClick={() => onAddToHike(munro)} label="Add to hike list"/>
                </ListItem>
            ))}
            </List>
        {selectedMunro && <MunroDetail munro={selectedMunro} onAddToHike={onAddToHike} />}
      </Wrapper>

    )
}

export default ToHikeList

const Wrapper = styled.div`
  padding: 1em;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 1em 0;
`;

