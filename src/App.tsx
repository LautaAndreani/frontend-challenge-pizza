import { Routes, Route } from "react-router-dom"
import Home from "./Views/Home"
import Lists from "./Views/Lists"
import Local from "./Views/Local"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lists" element={<Lists />} />
				<Route path="/lists/:localId" element={<Local />} />
			</Routes>
		</div>
	)
}

export default App
