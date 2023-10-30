
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Content/Home"

const App = () => {
  const name = "hiker"

  return (
    <div>
      <NavBar />
      <Home name ={name}/>
    </div>
  )
}

export default App
