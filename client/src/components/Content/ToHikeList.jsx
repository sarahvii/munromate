import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import MunroItem from "./MunroItem";
import SearchBar from "./SearchBar";

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
      const url = `http://localhost:3001/munros/${id}`
      const munroToUpdate = munros.find(m => m.id === id)
      const updatedMunro = {...munroToUpdate, favourite: !munroToUpdate.favourite}
  
      axios.put(url, updatedMunro)
        .then(response => {
          const updatedMunros = munros.map(m => m.id !== id ? m : response.data)
          setMunros(updatedMunros)
          if (selectedMunro && selectedMunro.id === id) {
            setSelectedMunro(response.data);
          }
        })
        .catch(error => {
          console.error('Error updating favouriteness of munro', error)
        })
    }

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

