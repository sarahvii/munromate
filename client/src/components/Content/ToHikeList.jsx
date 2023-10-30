import { useState, useEffect } from "react";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import Button from "../Button/button";

const ToHikeList = ({munros, onAddToHike}) => {
    const [munrosToHike, setMunrosInList] = useState(munros)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
        const filteredMunros = munros.filter(munro =>
            munro.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMunrosInList(filteredMunros)
    }, [searchTerm, munros])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleMunroClick = (munro) => {
        setSelectedMunro(munro);
      };

    return (
        <Wrapper>
        <Title>Munros I want to hike</Title>
        <div>
            Search my to hike list <input value={searchTerm} onChange={handleSearchChange} />
        </div>
            <List>
            {munrosToHike.map(munro => (
                <ListItem key={munro.id} onClick={() => handleMunroClick(munro)}>
                {munro.name} ({munro.height}m) - near {munro.near}
                <Button onClick={() => onAddToHike(munro)} label="Add to hike list // change to favourites // hiked"/>
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

