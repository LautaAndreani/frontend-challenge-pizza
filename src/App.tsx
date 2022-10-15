import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
	return (
		<div>
			<h1>Best Pizza 🍕</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lists" element={<h2>Hello to lists</h2>} />
			</Routes>
		</div>
	)
}

export default App
