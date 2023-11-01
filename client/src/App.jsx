import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"
import ToHikeList from "./components/Content/ToHikeList"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"


const App = () => {
  const name = "hiker"
  const [munros, setMunros] = useState([])
  // const [munrosToHike, setMunrosToHike] = useState([])

  const addMunroToHike = (newMunro) => {
      if (!munros.some(munro => munro.id === newMunro.id)) {
          setMunros([...munros, newMunro])
      } else {
        window.alert(`${newMunro.name} is already in your to hike list!`)
      }
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/munros')
      .then(response => {
        console.log("promise fulfilled")
        setMunros(response.data)
      })
  }, [])
  console.log('render', munros.length, 'munros')

  return (
    <Router>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home name={name} munros={munros} />} />
        <Route path="/munros" element={<MunroList munros={munros} onAddToHike={addMunroToHike} setMunros={setMunros}/>} />
        <Route path="/tohikelist" element={<ToHikeList munros={munros} setMunros={setMunros} addMunroToHike={addMunroToHike}/>} />
      </Routes>
    </Router>
  )
}

export default App

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
