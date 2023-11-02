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
        <>
        <MainContent>
            <TopSection>
                <Title>Munro List</Title>
                <SearchBar value={searchTerm} onChange={handleSearchChange} />
            </TopSection>
            <Wrapper>
              <LeftSideWrapper>
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
                </LeftSideWrapper>
                <RightSideWrapper>
                {selectedMunro && 
                <MunroDetail 
                    munro={selectedMunro} 
                    addMunroToHike={addMunroToHike}
                    toggleFavourite={() => toggleFavouriteOf(selectedMunro.id)} 
                    showAddToHikeButton={true}/>}
                </RightSideWrapper>
            </Wrapper>
            </MainContent>
        </>
    )
}

export default MunroList;

const MainContent = styled.div`
    padding-top: 60px;`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 10em;
    text-align: center;
`;

const Title = styled.h2`
    color: #333;
    margin-bottom: 1em;
`;

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TopSection = styled.div`
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background: #f0f0f0; 
`;

const RightSideWrapper = styled.div`
    max-width: 50%;
    width: 45%;
    text-align: left;
`;

const LeftSideWrapper = styled.div`
    max-width: 50%;
    width: 45%;
    text-align: left;
`;

