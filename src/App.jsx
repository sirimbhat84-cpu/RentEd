import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Borrow from "./pages/Borrow"
import Rent from "./pages/Rent"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </Router>
  )
}

export default App