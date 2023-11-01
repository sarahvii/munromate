// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import MunroList from './MunroList';
// import SearchBar from './SearchBar';
// import ToHikeList from './ToHikeList';

// const AllMunrosList = ({ munrosToHike, setMunrosToHike }) => {
//   const [munros, setMunros] = useState([]);
//   // const [munrosToHike, setMunrosToHike] = useState([])
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:3001/munros')
//       .then(response => setMunros(response.data))
//       .catch(error => console.error('Error fetching munros', error));
//   }, []);

//   const addMunroToHike = (munro) => {
//     if (!munrosToHike.some(m => m.id === munro.id)) {
//       setMunrosToHike([...munrosToHike, munro])
//     }
//   }

//   const removeMunroFromHike = (munroId) => {
//     setMunrosToHike(munrosToHike.filter(m => m.id !== munroId))
//   }

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredMunros = munros.filter(munro =>
//     munro.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Wrapper>
//       <Title>All Munros</Title>
//       <SearchBar value={searchTerm} onChange={handleSearchChange} />
//       <MunroList
//         munros={filteredMunros}
//         addMunroToHike={addMunroToHike}
//       />
//       <ToHikeList 
//         munrosToHike={munrosToHike} removeMunroFromHike={removeMunroFromHike} />
//     </Wrapper>
//   );
// };

// export default AllMunrosList;

// const Wrapper = styled.div`
//   padding: 1em;
//   text-align: center;
// `;

// const Title = styled.h2`
//   color: #333;
// `;
