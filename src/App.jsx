import { Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin/>}/> 
        <Route exact path="/home"  element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
