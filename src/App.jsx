import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"
import MunroList from "./components/Content/MunroList"

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
      <NavBar />
      <Home name={name}/>
      <MunroList munros={munros} />
    </div>
  )
}

export default App
