  import { useState, useEffect } from 'react';
  import styled from 'styled-components';
  import MunroItem from "./MunroItem";
  import MunroDetail from './MunroDetail';
  import SearchBar from './SearchBar';
  import ToggleFavourite from './ToggleFavourite';

  const MunroList = ({munros, setMunros, addMunroToHike}) => {
      const [munrosInFilteredList, setMunrosInFilteredList] = useState(munros)
      const [searchTerm, setSearchTerm] = useState('')
      const [selectedMunro, setSelectedMunro] = useState(null);

      useEffect(() => {
          const filteredMunros = munros.filter(munro =>
              munro.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setMunrosInFilteredList(filteredMunros)
      }, [searchTerm, munros])

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
          <Title>Munro List</Title>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
              <List>
              {munrosInFilteredList.map(munro => (
                  <MunroItem 
                    key={munro.id} 
                    munro={munro} 
                    onClick={handleMunroClick} 
                    addMunroToHike={addMunroToHike}
                    toggleFavourite={() => toggleFavouriteOf(munro.id)}
                    showAddToHikeButton={true}/>
              ))}
          </List>
          {selectedMunro && 
          <MunroDetail 
            munro={selectedMunro} 
            addMunroToHike={addMunroToHike}
            toggleFavourite={() => toggleFavouriteOf(selectedMunro.id)} 
            showAddToHikeButton={true}/>}
        </Wrapper>

      )
  }

  export default MunroList;

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
