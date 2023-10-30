import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import ToHikeList from "./components/Content/ToHikeList"

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;


const App = () => {
  const name = "hiker"

  const munros = [
    {
      name: 'Ben Nevis',
      height: 219,
      near: 'Oban'
    },
    {
      name: 'Arthurs Seat',
      height: 20,
      near: 'Edinburgh'
    }
  ]

  return (
    <div>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' rel="stylesheet" />;
      </Helmet>
      <GlobalStyles />
      <NavBar />
      <Home name={name} munros={munros}/>
      <MunroList munros={munros} />
      <ToHikeList munros={munros}/>
    </div>
  )
}

export default App
