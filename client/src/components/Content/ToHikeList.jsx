import { useState, useEffect } from "react";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import MunroItem from "./MunroItem";
import SearchBar from "./SearchBar";
import ToggleFavourite from "./ToggleFavourite.jsx";

const ToHikeList = ({munros, addMunroToHike, setMunros, munrosToHike}) => {
    const [munrosInFilteredList, setMunrosInFilteredList] = useState(munrosToHike)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      const filteredMunros = munrosToHike.filter(munro =>
          munro.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMunrosInFilteredList(filteredMunros)
    }, [searchTerm, munrosToHike])
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleMunroClick = (munro) => {
        setSelectedMunro(munro);
      };

    const toggleFavouriteOf = (id) => {
      ToggleFavourite(id, setMunros, munros, selectedMunro, setSelectedMunro);
  };

    return (
        <Wrapper>
        <Title>Munros I want to hike</Title>
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
            <List>
            {munrosInFilteredList.map(munro => (
                <MunroItem
                  key={munro.id}
                  munro={munro}
                  onClick={handleMunroClick}
                  toggleFavourite={() => toggleFavouriteOf(munro.id)
                  }
                />
            ))}
            </List>
        {selectedMunro && (
          <MunroDetail 
            key={selectedMunro.id}
            munro={selectedMunro} 
            addMunroToHike={addMunroToHike} 
            toggleFavourite={() => toggleFavouriteOf(selectedMunro.id)}/>
          )}
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

