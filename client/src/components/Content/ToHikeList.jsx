import { useState, useEffect } from "react";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import MunroItem from "./MunroItem";
import Button from "../Button/button";
import SearchBar from "./SearchBar";

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
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
            <List>
            {munrosToHike.map(munro => (
                <MunroItem
                  key={munro.id}
                  munro={munro}
                  onClick={handleMunroClick}
                />
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

