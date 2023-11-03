import { useState, useEffect } from "react";
import styled from "styled-components";
import MunroDetail from "./MunroDetail";
import MunroItem from "./MunroItem";
import SearchBar from "./SearchBar";
import ToggleFavourite from "./ToggleFavourite.jsx";

const ToHikeList = ({munros, addMunroToHike, setMunros, munrosToHike, removeMunroFromHike}) => {
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
    
    const handleRemoveClick = (munro) => {
        removeMunroFromHike(munro);
      };

    const toggleFavouriteOf = (id) => {
      ToggleFavourite(id, setMunros, munros, selectedMunro, setSelectedMunro);
  };

    return (
        <MainContent>
          <TopSection>
            <Title>Munros I want to hike</Title>
            <SearchBar value={searchTerm} onChange={handleSearchChange} />
          </TopSection>
        <Wrapper>
          <LeftSideWrapper> 
            <List>
            {munrosInFilteredList.map(munro => (
              <div key={munro.id}>
                <MunroItem
                  munro={munro}
                  onClick={handleMunroClick}
                  showRemoveButton={true}
                  removeMunroFromHike={removeMunroFromHike}
                  toggleFavourite={() => toggleFavouriteOf(munro.id)
                  }
                />
              </div>
            ))}
            </List>
          </LeftSideWrapper>
          <RightSideWrapper>
        {selectedMunro && (
          <MunroDetail 
            key={selectedMunro.id}
            munro={selectedMunro} 
            addMunroToHike={addMunroToHike} 
            toggleFavourite={() => toggleFavouriteOf(selectedMunro.id)}/>
          )}
          </RightSideWrapper>
      </Wrapper>
      </MainContent>
    )
}

export default ToHikeList

const MainContent = styled.div`
    padding-top: 60px;`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10em;
    text-align: center;
`;

const TopSection = styled.div`
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background: #f0f0f0; 
`;

const Title = styled.h2`
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LeftSideWrapper = styled.div`
    max-width: 50%;
    width: 45%;
    text-align: left;
`;

const RightSideWrapper = styled.div`
    max-width: 50%;
    width: 45%;
    text-align: left;
`;

