import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"
import ToHikeList from "./components/Content/ToHikeList"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import munroService from './services/munros'


const App = () => {
  const name = "hiker"
  const [munros, setMunros] = useState([])
  const [munrosToHike, setMunrosToHike] = useState([])

  // get all munros and add to state
  useEffect(() => {
    munroService.getAll().then(setMunros);
  }, []);

  // add munro to hike list and set state
  const addMunroToHike = (munroToHike) => {
    if (!munrosToHike.some(munro => munro.id === munroToHike.id)) {
        setMunrosToHike([...munrosToHike, munroToHike])
    } else {
      window.alert(`${munroToHike.name} is already in your to hike list!`)
      // change to modal or toast
    }
}

  return (
    <Router>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home name={name} munros={munros} />} />
        <Route path="/munros" element={<MunroList munros={munros} addMunroToHike={addMunroToHike} setMunros={setMunros}/>} />
        <Route path="/tohikelist" element={<ToHikeList munros={munros} setMunros={setMunros} munrosToHike={munrosToHike} />} />
      </Routes>
    </Router>
  )
}

export default App

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
