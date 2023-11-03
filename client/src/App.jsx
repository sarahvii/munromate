import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"
import ToHikeList from "./components/Content/ToHikeList"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import munroService from './services/munros'
import Notification from "./components/Notification/Notification";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  const name = "hiker"
  const [munros, setMunros] = useState([])
  const [munrosToHike, setMunrosToHike] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  // get all munros and add to state
  useEffect(() => {
    munroService.getAll().then(setMunros);
  }, []);
  
  // add munro to hike list and set state
  const addMunroToHike = (munroToHike) => {
    if (!munrosToHike.some(munro => munro.id === munroToHike.id)) {
        setMunrosToHike([...munrosToHike, munroToHike])
        setSuccessMessage(
          `${munroToHike.name} has been added to your list!`
        )
        setErrorMessage(null)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
    } else {
      setErrorMessage(
        `${munroToHike.name} is already in your to hike list!`
      )
      setSuccessMessage(null)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
}

  // remove munro from to hike list and update state
  const removeMunroFromHike = (munroToRemove) => {
    setMunrosToHike(munrosToHike.filter(munro => munro.id !== munroToRemove.id));
  };
  


  return (
    <>
    <Notification errorMessage={errorMessage} successMessage={successMessage}/>
    <Router>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel="stylesheet" />
      </Helmet>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home name={name} munros={munros} />} />
        <Route path="/munros" element={<MunroList munros={munros} addMunroToHike={addMunroToHike} setMunros={setMunros}/>} />
        <Route path="/tohikelist" element={<ToHikeList munros={munros} setMunros={setMunros} munrosToHike={munrosToHike} removeMunroFromHike={removeMunroFromHike}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
