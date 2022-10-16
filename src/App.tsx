import { Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Lists from "./Views/Lists"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/lists/:local" element={<h2>Soy una pagina con id</h2>} />
      </Routes>
    </div>
  )
}

export default App
