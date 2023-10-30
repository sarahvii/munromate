import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Munro from "./Munro";


const MunroList = ({munros}) => {
    const [munrosInList, setMunrosInList] = useState(munros)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredMunros = munros.filter(munro =>
            munro.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setMunrosInList(filteredMunros)
    }, [searchTerm, munros])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

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
                <Munro key={munro.id} munro={munro} />
            ))}
        </List>
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

const ListItem = styled.li`
  margin: 1em 0;
`;