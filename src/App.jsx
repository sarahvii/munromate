import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"
import ToHikeList from "./components/Content/ToHikeList"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;


const App = () => {
  const name = "hiker"

  const munros = [
    {
      id: 1,
      name: 'Ben Nevis',
      height: 219,
      near: 'Oban'
    },
    {
      id: 2,
      name: 'Arthurs Seat',
      height: 20,
      near: 'Edinburgh'
    }
  ]

  return (
    <Router>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel="stylesheet" />;
      </Helmet>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home name={name} munros={munros} />} />
        <Route path="/munros" element={<MunroList munros={munros} />} />
        <Route path="/tohikelist" element={<ToHikeList munros={munros} />} />
      </Routes>
    </Router>
  )
}

export default App
