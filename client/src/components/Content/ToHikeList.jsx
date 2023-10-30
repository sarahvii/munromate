import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import MunroItem from "./MunroItem";
import SearchBar from "./SearchBar";

const ToHikeList = ({munros, addMunroToHike, setMunros}) => {
    const [munrosToHike, setMunrosToHike] = useState(munros)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
        const filteredMunros = munros.filter(munro =>
            munro.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMunrosToHike(filteredMunros)
    }, [searchTerm, munros])

    useEffect(() => {
      if (selectedMunro) {
        const updatedMunro = munros.find(m => m.id === selectedMunro.id);
        setSelectedMunro(updatedMunro);
      }
    }, [munros]);
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleMunroClick = (munro) => {
        setSelectedMunro(munro);
      };

    const toggleFavouriteOf = (id) => {
      const url = `http://localhost:3001/munros/${id}`
      const munro = munros.find(m => m.id === id)
      const changedMunro = {...munro, favourite: !munro.favourite}

      axios.put(url, changedMunro)
        .then(response => {
          console.log('Server Response:', response.data);
          const updatedMunros = munros.map(m => m.id !== id ? m : response.data)
          setMunros(updatedMunros)
          console.log("Updated Munros", updatedMunros);
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
            {munrosToHike.map(munro => (
                <MunroItem
                  key={munro.id}
                  munro={munro}
                  onClick={handleMunroClick}
                  toggleFavourite={() => toggleFavouriteOf(munro.id)}
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

