import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lists" element={<h2>Hello to lists</h2>} />
			</Routes>
		</div>
	)
}

export default App
