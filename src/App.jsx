import { Navigate, Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import HomePage from "./pages/HomePage"
import { useAppContext } from "./context/context"
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin/>}/> 
        <Route exact path="/home"  element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
