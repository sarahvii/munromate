import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MunroItem from "./MunroItem";
import MunroDetail from './MunroDetail';


const MunroList = ({munros, onAddToHike}) => {
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

    return (
        <Wrapper>
        <Title>Munro List</Title>
        <div>
        </div>
        <div>
            Find a munro <input value={searchTerm} onChange={handleSearchChange} />
        </div>
            <List>
            {munrosInList.map(munro => (
                <MunroItem key={munro.id} munro={munro} onClick={handleMunroClick} onAddToHike={onAddToHike}/>
            ))}
        </List>
        {selectedMunro && <MunroDetail munro={selectedMunro} onAddToHike={onAddToHike} />}
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
