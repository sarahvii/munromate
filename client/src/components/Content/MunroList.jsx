  import { useState, useEffect } from 'react';
  import styled from 'styled-components';
  import MunroItem from "./MunroItem";
  import MunroDetail from './MunroDetail';
  import SearchBar from './SearchBar';
  import axios from 'axios';

  const MunroList = ({munros, onAddToHike, setMunros}) => {
      const [munrosInList, setMunrosInList] = useState(munros)
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
          <Title>Munro List</Title>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
              <List>
              {munrosInList.map(munro => (
                  <MunroItem 
                    key={munro.id} 
                    munro={munro} 
                    onClick={handleMunroClick} 
                    onAddToHike={onAddToHike}
                    toggleFavourite={() => toggleFavouriteOf(munro.id)}
                    showAddToHikeButton={true}/>
              ))}
          </List>
          {selectedMunro && 
          <MunroDetail 
            munro={selectedMunro} 
            onAddToHike={onAddToHike}
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
