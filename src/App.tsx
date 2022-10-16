import { Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Lists from "./Views/Lists"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/lists/:local" element={<Lists />} />
      </Routes>
    </div>
  )
}

export default App
